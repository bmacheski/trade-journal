import React from 'react'
import { useFirestore, useFirestoreDocData } from 'reactfire'
import moment from 'moment'
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

const formatDate = (date: string) => {
  const d = date || new Date()
  return moment(d).format('YYYY-MM-DD[T]HH:mm:ss')
}

function parseDateFields(values) {
  const { entryDate, exitDate } = values

  return Object.assign(values, {
    entryDate: entryDate ? formatDate(entryDate) : null,
    exitDate: exitDate ? formatDate(exitDate) : null,
  })
}

function TradeForm() {
  const { id = 'new' } = useParams()

  const isNewTrade = id === 'new'

  const tradesRef = useFirestore().collection('trades')
  const trade: Trade = useFirestoreDocData(tradesRef.doc(id), {
    idField: 'id',
  })

  const [formTrade, setFormTrade] = React.useState<Trade | null>(null)

  React.useEffect(() => {
    if (trade) {
      setFormTrade(parseDateFields(trade))
    }
  }, [trade])

  const [redirect, setRedirect] = React.useState<string>('')

  async function onSubmit() {
    const formData = parseDateFields(formTrade)
    !isNewTrade
      ? await tradesRef.doc(formData.id).update(formData)
      : await tradesRef.add(formData)

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
              name="entryDate"
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
              name="exitDate"
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
              name="entryPrice"
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
              name="exitPrice"
              value={formTrade?.exitPrice}
              variant="outlined"
              onChange={onFormFieldChange}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Buy / Sell</FormLabel>
              <RadioGroup
                aria-label="buy"
                name="action"
                value={formTrade?.action}
                onChange={onFormFieldChange}
              >
                <FormControlLabel value="buy" control={<Radio />} label="Buy" />
                <FormControlLabel
                  value="sell"
                  control={<Radio />}
                  label="Sell"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id="outlined-multiline-flexible"
              label="Notes"
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
