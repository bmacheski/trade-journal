import React from 'react'
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Card,
  CardContent,
} from '@material-ui/core'
import * as dateFormatter from '../utils/date'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Formik } from 'formik'
import { updateTrade, createTrade } from '../api/trades'
import { getPairs } from '../api/pairs'
import { getSetups, Setup } from '../api/setups'
import { DateTimePicker } from '@material-ui/pickers'
import { getPlatforms } from '../api/platforms'
import { getTags } from '../api/tags'
import { Trade } from '../types'
import Router from 'next/router'

function parseDateFields(values: any) {
  const { entry_date, exit_date } = values

  return Object.assign(values, {
    entry_date: entry_date ? dateFormatter.toDateTime(entry_date) : null,
    exit_date: exit_date ? dateFormatter.toDateTime(exit_date) : null,
  })
}

interface SymbolOptionType {
  id: number
  name: string
}

interface TradeFormProps {
  trade?: Trade
  id?: string
}

function TradeForm({ trade, id }: TradeFormProps) {
  const [pairs, setPairs] = React.useState<any[]>([])
  const [setups, setSetups] = React.useState<any[]>([])
  const [tags, setTags] = React.useState<any[]>([])
  const [platforms, setPlatforms] = React.useState<any[]>([])

  const inputProps = {
    fullWidth: true,
    margin: 'dense' as any,
    InputLabelProps: {
      shrink: true,
    },
  }

  React.useEffect(() => {
    async function initialize() {
      Promise.all([
        getPairs().then((res) => setPairs(res)),
        getSetups().then((res) => setSetups(res)),
        getPlatforms().then((res) => setPlatforms(res)),
        getTags().then((res) => setTags(res)),
      ])
    }
    initialize()
  }, [])

  async function onSubmit(form: any) {
    const formData = parseDateFields(form)

    if (id === 'new') {
      await createTrade(formData)
    } else {
      await updateTrade(id, formData)
    }

    Router.push({
      pathname: '/trades',
    })
  }

  function onSetupChange(setups: Setup[]) {
    return setups.map((setup) => {
      if (!setup.setup_id) {
        return Object.assign({}, setup, {
          setup_id: setup.id,
        })
      }
      return setup
    })
  }

  return (
    <Card>
      <CardContent>
        <div>
          {trade?.risk_multiple && (
            <Chip
              color="primary"
              label={`R Multiple: ${Number(trade.risk_multiple).toFixed(1)}`}
            />
          )}
          {trade?.risk_reward_ratio && (
            <Chip
              style={{ marginLeft: '10px' }}
              color="primary"
              label={`RR: ${Number(trade.risk_reward_ratio).toFixed(2)}`}
            />
          )}
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={trade || ({} as Trade)}
          onSubmit={onSubmit}
        >
          {(props) => {
            return (
              <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item lg={3} md={3} xs={12}>
                    <Autocomplete
                      id="symbol-autocomplete"
                      options={pairs}
                      value={props.values?.pair || {}}
                      getOptionLabel={(option: SymbolOptionType) => option.name}
                      onChange={(_, val) => props.setFieldValue('pair', val)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Symbol"
                          required
                          {...inputProps}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={12}>
                    <TextField
                      label="Quantity"
                      name="quantity"
                      type="number"
                      required
                      value={props.values?.quantity}
                      onChange={props.handleChange}
                      {...inputProps}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    md={3}
                    xs={12}
                    container
                    justify="space-around"
                  >
                    <DateTimePicker
                      label="Entry Date"
                      name="entry_date"
                      value={props.values?.entry_date}
                      onChange={(val) => {
                        props.setFieldValue('entry_date', val)
                      }}
                      {...inputProps}
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={12}>
                    <DateTimePicker
                      label="Exit Date"
                      name="exit_date"
                      onChange={(val) => {
                        props.setFieldValue('exit_date', val)
                      }}
                      value={props.values?.exit_date}
                      {...inputProps}
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={12}>
                    <TextField
                      label="Entry Price"
                      name="entry_price"
                      value={props.values?.entry_price}
                      onChange={props.handleChange}
                      {...inputProps}
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={12}>
                    <TextField
                      label="Exit Price"
                      name="exit_price"
                      value={props.values?.exit_price}
                      onChange={props.handleChange}
                      {...inputProps}
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={12}>
                    <FormControl {...inputProps}>
                      <InputLabel shrink id="action-select-label">
                        Buy / Sell
                      </InputLabel>
                      <Select
                        labelId="action-select-label"
                        id="action-select"
                        name="action"
                        value={props.values?.action || ''}
                        onChange={props.handleChange}
                      >
                        <MenuItem value="buy">Buy</MenuItem>
                        <MenuItem value="sell">Sell</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={3} md={3} xs={12}>
                    <TextField
                      label="Stop Loss"
                      name="stop_loss"
                      value={props.values?.stop_loss}
                      onChange={props.handleChange}
                      {...inputProps}
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={12}>
                    <TextField
                      label="Take Profit"
                      name="take_profit"
                      value={props.values?.take_profit}
                      onChange={props.handleChange}
                      {...inputProps}
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={12}>
                    <FormControl {...inputProps}>
                      <InputLabel shrink id="action-select-label">
                        Original TP Hit
                      </InputLabel>
                      <Select
                        labelId="tp-hit-select-label"
                        id="tp-hit-select"
                        name="original_take_profit_hit"
                        value={(
                          props.values?.original_take_profit_hit || 'false'
                        ).toString()}
                        onChange={props.handleChange}
                      >
                        <MenuItem value="true">Yes</MenuItem>
                        <MenuItem value="false">No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={3} md={3} xs={12}>
                    <TextField
                      label="Fees"
                      name="fees"
                      value={props.values?.fees}
                      onChange={props.handleChange}
                      {...inputProps}
                    />
                  </Grid>
                  <Grid item lg={3} md={3} xs={12}>
                    <Autocomplete
                      id="symbol-autocomplete"
                      options={platforms}
                      value={props.values?.platform || null}
                      getOptionLabel={(option: SymbolOptionType) => option.name}
                      onChange={(_, val) =>
                        props.setFieldValue('platform', val)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Exchange"
                          {...inputProps}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item lg={12} md={12} xs={12}>
                    <Autocomplete
                      multiple
                      id="setup-autocomplete"
                      options={setups}
                      value={props.values?.trade_setups || []}
                      getOptionLabel={(option: any) => option.name || ''}
                      onChange={(_, val: any) =>
                        props.setFieldValue('trade_setups', onSetupChange(val))
                      }
                      getOptionSelected={(option, value = []) =>
                        value.id === option.id
                      }
                      renderInput={(params) => (
                        <TextField {...params} label="Setups" {...inputProps} />
                      )}
                    />
                  </Grid>
                  <Grid item lg={12} md={12} xs={12}>
                    <Autocomplete
                      multiple
                      id="setup-autocomplete"
                      options={tags}
                      value={props.values?.trade_tags || []}
                      getOptionLabel={(option: any) => option.name || ''}
                      onChange={(_, val: any) =>
                        props.setFieldValue('trade_tags', onSetupChange(val))
                      }
                      getOptionSelected={(option, value = []) =>
                        value.id === option.id
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          helperText="Use tags to track emotions, mistakes, etc."
                          label="Tags"
                          {...inputProps}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      label="Screenshot URL"
                      name="image_url"
                      value={props.values?.image_url}
                      onChange={props.handleChange}
                      {...inputProps}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      label="Notes"
                      name="notes"
                      variant="outlined"
                      multiline
                      rows={8}
                      value={props.values?.notes}
                      onChange={props.handleChange}
                      {...inputProps}
                    />
                  </Grid>
                </Grid>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  style={{ marginTop: '10px' }}
                >
                  Save
                </Button>
              </form>
            )
          }}
        </Formik>
      </CardContent>
    </Card>
  )
}

export default TradeForm
