import React from 'react'
import { Trade } from '../trade.model'
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
import { GET_TRADES, UPDATE_TRADE, CREATE_TRADE } from '../queries'

function parseDateFields(values) {
  const { entry_date, exit_date } = values
  // temp removal for hasura updates
  delete values['__typename']
  return Object.assign(values, {
    entry_date: entry_date ? dateFormatter.toDateTime(entry_date) : null,
    exit_date: exit_date ? dateFormatter.toDateTime(exit_date) : null,
  })
}

function TradeForm() {
  const { id = 'new' } = useParams()
  const isNewTrade = id === 'new'

  const { data = {} }: any = useQuery(GET_TRADES, {
    variables: { id },
  })

  const [updateTrade, { loading: updating }] = useMutation(UPDATE_TRADE)
  const [createTrade, { loading: creating }] = useMutation(CREATE_TRADE)

  const { trades = [] } = data
  const [formTrade, setFormTrade] = React.useState<Trade | null>(null)

  React.useEffect(() => {
    if (trades && trades.length) {
      setFormTrade(parseDateFields(trades[0]))
    }
  }, [trades.length])

  const [redirect, setRedirect] = React.useState<string>('')

  async function onSubmit() {
    const formData = parseDateFields(formTrade)
    if (isNewTrade) {
      await createTrade({
        variables: { trade: formData },
      })
    } else {
      await updateTrade({
        variables: { id, changes: formData },
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

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <div>
      <h1>{isNewTrade ? 'Add' : 'Edit'} Trade</h1>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              helperText="Please specify the trade pair"
              label="Pair"
              margin="dense"
              name="pair"
              required
              value={formTrade?.pair}
              variant="outlined"
              onChange={onFormFieldChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Quantity"
              helperText="Please specify the quantity"
              name="quantity"
              type="number"
              required
              margin="dense"
              value={formTrade?.quantity}
              variant="outlined"
              onChange={onFormFieldChange}
            />
          </Grid>
          <Grid item md={6} xs={12} container justify="space-around">
            <TextField
              fullWidth
              label="Entry Date"
              type="datetime-local"
              margin="dense"
              variant="outlined"
              name="entry_date"
              value={formTrade?.entryDate}
              onChange={onFormFieldChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Exit Date"
              margin="dense"
              type="datetime-local"
              name="exit_date"
              variant="outlined"
              onChange={onFormFieldChange}
              value={formTrade?.exitDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Entry Price"
              margin="dense"
              name="entry_price"
              value={formTrade?.entryPrice}
              variant="outlined"
              onChange={onFormFieldChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Exit Price"
              margin="dense"
              name="exit_price"
              value={formTrade?.exitPrice}
              variant="outlined"
              onChange={onFormFieldChange}
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
                    <Radio value="buy" checked={formTrade?.action == 'buy'} />
                  }
                  label="Buy"
                />
                <FormControlLabel
                  control={
                    <Radio value="sell" checked={formTrade?.action == 'sell'} />
                  }
                  label="Sell"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item md={10} xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              margin="dense"
              name="image_url"
              value={formTrade?.imageUrl}
              variant="outlined"
              onChange={onFormFieldChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id="outlined-multiline-flexible"
              label="Notes"
              name="notes"
              multiline
              rowsMax={4}
              fullWidth
              variant="outlined"
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
