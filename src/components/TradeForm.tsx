import React from 'react'
import {
  TextField,
  Grid,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'
import { useParams, Redirect } from 'react-router-dom'
import { ROUTES } from '../Router'
import * as dateFormatter from '../utils/date'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {
  GET_TRADES,
  UPDATE_TRADE,
  CREATE_TRADE,
  GET_SYMBOLS,
} from '../graphql/queries/trades.query'
import Autocomplete from '@material-ui/lab/Autocomplete'

function parseDateFields(values) {
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
  const { id = 'new' } = useParams()
  const isNewTrade = id === 'new'
  const [formTrade, setFormTrade] = React.useState<any | null>(null)
  const [redirect, setRedirect] = React.useState<string>('')

  const { data: { trades = [] } = {} }: any = useQuery(GET_TRADES, {
    variables: { id },
  })
  const { data: { symbols = [] } = {} }: any = useQuery(GET_SYMBOLS)

  const [updateTrade, { loading: updating }] = useMutation(UPDATE_TRADE)
  const [createTrade, { loading: creating }] = useMutation(CREATE_TRADE)

  const inputProps = {
    fullWidth: true,
    variant: 'outlined' as 'outlined',
    margin: 'dense' as any,
    InputLabelProps: {
      shrink: true,
    },
  }

  React.useEffect(() => {
    if (trades && trades.length) {
      setFormTrade(parseDateFields(trades[0]))
    }
  }, [trades.length])

  async function onSubmit() {
    if (updating || creating) return
    const formData = parseDateFields(formTrade)
    // temp removal for hasura updates
    delete formData['__typename']
    delete formData['symbol']

    if (isNewTrade) {
      await createTrade({
        variables: { trade: formData },
        refetchQueries: [{ query: GET_TRADES }],
      })
    } else {
      await updateTrade({
        variables: { id, changes: formData },
        refetchQueries: [{ query: GET_TRADES }],
      })
    }
    setRedirect(ROUTES.TRADE_LIST)
  }

  function onFormFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormTrade(
      Object.assign({}, formTrade, {
        [event.target.name]: event.target.value,
      }),
    )
  }

  if (redirect) return <Redirect to={redirect} />

  if (!formTrade && !isNewTrade) return <></>

  return (
    <div>
      <h1>{isNewTrade ? 'Add' : 'Edit'} Trade</h1>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Autocomplete
              id="controlled-demo"
              options={symbols}
              value={formTrade?.symbol}
              defaultValue={formTrade?.symbol}
              getOptionLabel={(option: SymbolOptionType) => option.name}
              onChange={(_, newValue: SymbolOptionType | null) => {
                if (!newValue) return
                setFormTrade(
                  Object.assign({}, formTrade, {
                    pair: newValue.id,
                  }),
                )
              }}
              renderInput={(params) => (
                <TextField {...params} label="Symbol" {...inputProps} />
              )}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Quantity"
              helperText="Please specify the quantity"
              name="quantity"
              type="number"
              required
              value={formTrade?.quantity}
              onChange={onFormFieldChange}
              {...inputProps}
            />
          </Grid>
          <Grid item md={6} xs={12} container justify="space-around">
            <TextField
              label="Entry Date"
              type="datetime-local"
              name="entry_date"
              value={formTrade?.entry_date}
              onChange={onFormFieldChange}
              {...inputProps}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Exit Date"
              type="datetime-local"
              name="exit_date"
              onChange={onFormFieldChange}
              value={formTrade?.exit_date}
              {...inputProps}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              label="Entry Price"
              name="entry_price"
              value={formTrade?.entry_price}
              onChange={onFormFieldChange}
              {...inputProps}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Exit Price"
              name="exit_price"
              value={formTrade?.exit_price}
              onChange={onFormFieldChange}
              {...inputProps}
            />
          </Grid>
          <Grid item md={2} xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Buy / Sell</FormLabel>
              <RadioGroup
                aria-label="buy"
                name="action"
                value={formTrade?.action}
                onChange={onFormFieldChange}
              >
                <FormControlLabel
                  control={
                    <Radio value="buy" checked={formTrade?.action === 'buy'} />
                  }
                  label="Buy"
                />
                <FormControlLabel
                  control={
                    <Radio
                      value="sell"
                      checked={formTrade?.action === 'sell'}
                    />
                  }
                  label="Sell"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item md={5} xs={12}>
            <TextField
              label="Target"
              name="target"
              value={formTrade?.target}
              onChange={onFormFieldChange}
              {...inputProps}
            />
          </Grid>
          <Grid item md={5} xs={12}>
            <TextField
              label="Stop Loss"
              name="stop_loss"
              value={formTrade?.stop_loss}
              onChange={onFormFieldChange}
              {...inputProps}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Setup"
              name="setup"
              value={formTrade?.setup}
              onChange={onFormFieldChange}
              {...inputProps}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Image URL"
              name="image_url"
              value={formTrade?.image_url}
              onChange={onFormFieldChange}
              {...inputProps}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="outlined-multiline-flexible"
              label="Notes"
              name="notes"
              multiline
              rowsMax={4}
              value={formTrade?.notes}
              onChange={onFormFieldChange}
              {...inputProps}
            />
          </Grid>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          onClick={onSubmit}
          style={{ marginTop: '10px' }}
        >
          Save
        </Button>
      </form>
    </div>
  )
}

export default TradeForm
