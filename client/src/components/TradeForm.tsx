import React from 'react'
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import { useParams, Redirect } from 'react-router-dom'
import { ROUTES } from '../Router'
import * as dateFormatter from '../utils/date'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Formik } from 'formik'
import { getTrade, updateTrade, createTrade } from '../api/trades'
import { getPairs } from '../api/pairs'
import { getSetups } from '../api/setups'
import { DateTimePicker } from '@material-ui/pickers'

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

function TradeForm() {
  const { id = 'new' }: any = useParams()
  const isNewTrade = id === 'new'

  const [redirect, setRedirect] = React.useState<string>('')

  const [trade, setTrade] = React.useState<any>(null)
  const [pairs, setPairs] = React.useState<any[]>([])
  const [setups, setSetups] = React.useState<any[]>([])

  const inputProps = {
    fullWidth: true,
    variant: 'outlined' as any,
    margin: 'dense' as any,
    InputLabelProps: {
      shrink: true,
    },
  }

  React.useEffect(() => {
    getPairs().then((res) => setPairs(res))
    getSetups().then((res) => setSetups(res))
    if (id === 'new') return
    getTrade(id).then((res) => setTrade(res))
  }, [])

  async function onSubmit(form: any) {
    const formData = parseDateFields(form)

    if (id === 'new') {
      await createTrade(formData).then((res) => {})
    } else {
      await updateTrade(id, formData)
    }
    setRedirect(ROUTES.TRADE_LIST)
  }

  function onSetupChange(val) {
    return val.map((x) => {
      if (!x.setup_id) {
        return Object.assign({}, x, {
          setup_id: x.id,
        })
      }
      return x
    })
  }

  if (redirect) return <Redirect to={redirect} />

  return (
    <div>
      <h1>{isNewTrade ? 'Add' : 'Edit'} Trade</h1>
      <Formik
        enableReinitialize={true}
        initialValues={trade || {}}
        onSubmit={(values) => {
          onSubmit(values)
        }}
      >
        {(props) => {
          return (
            <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
              <Grid container spacing={4}>
                <Grid item md={3} xs={12}>
                  <Autocomplete
                    id="symbol-autocomplete"
                    options={pairs}
                    value={props.values?.pair || {}}
                    getOptionLabel={(option: SymbolOptionType) => option.name}
                    onChange={(_, val) => props.setFieldValue('pair', val)}
                    renderInput={(params) => (
                      <TextField {...params} label="Symbol" {...inputProps} />
                    )}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  <TextField
                    label="Quantity"
                    helperText="Please specify the quantity"
                    name="quantity"
                    type="number"
                    required
                    value={props.values?.quantity}
                    onChange={props.handleChange}
                    {...inputProps}
                  />
                </Grid>
                <Grid item md={3} xs={12} container justify="space-around">
                  <DateTimePicker
                    label="Entry Date"
                    inputVariant="outlined"
                    name="entry_date"
                    value={props.values?.entry_date}
                    onChange={(val) => {
                      props.setFieldValue('entry_date', val)
                    }}
                    {...inputProps}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  <DateTimePicker
                    inputVariant="outlined"
                    label="Exit Date"
                    name="exit_date"
                    onChange={(val) => {
                      props.setFieldValue('exit_date', val)
                    }}
                    value={props.values?.exit_date}
                    {...inputProps}
                  />
                </Grid>

                <Grid item md={3} xs={12}>
                  <TextField
                    label="Entry Price"
                    name="entry_price"
                    value={props.values?.entry_price}
                    onChange={props.handleChange}
                    {...inputProps}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  <TextField
                    label="Exit Price"
                    name="exit_price"
                    value={props.values?.exit_price}
                    onChange={props.handleChange}
                    {...inputProps}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
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
                <Grid item md={3} xs={12}>
                  <TextField
                    label="Target"
                    name="target"
                    value={props.values?.target}
                    onChange={props.handleChange}
                    {...inputProps}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  <TextField
                    label="Stop Loss"
                    name="stop_loss"
                    value={props.values?.stop_loss}
                    onChange={props.handleChange}
                    {...inputProps}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  <TextField
                    label="Take Profit"
                    name="take_profit"
                    value={props.values?.take_profit}
                    onChange={props.handleChange}
                    {...inputProps}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  <TextField
                    label="Fees"
                    name="fees"
                    value={props.values?.fees}
                    onChange={props.handleChange}
                    {...inputProps}
                  />
                </Grid>

                <Grid item md={3} xs={12}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="R:R"
                    name="risk_reward"
                    multiline
                    rowsMax={4}
                    value={props.values?.risk_reward}
                    onChange={props.handleChange}
                    {...inputProps}
                  />
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    label="Image URL"
                    name="image_url"
                    value={props.values?.image_url}
                    onChange={props.handleChange}
                    {...inputProps}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
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
                      value.id == option.id
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="Setup" {...inputProps} />
                    )}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    label="Notes"
                    name="notes"
                    multiline
                    rows={8}
                    variant="outlined"
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
    </div>
  )
}

export default TradeForm
