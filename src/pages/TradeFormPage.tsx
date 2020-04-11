import React from 'react'
import { useFirestore, useFirestoreDocData, SuspenseWithPerf } from 'reactfire'
import moment from 'moment'
import { Trade } from '../trade.model'
import { TextField, Grid, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

function parseDateFields(values, format: boolean = true) {
  const { entryDate, exitDate } = values

  const formatDate = (format: boolean, date: string) =>
    format ? moment(date).format('YYYY-MM-DD') : moment(date)

  return Object.assign(values, {
    entryDate: entryDate ? formatDate(format, entryDate) : null,
    exitDate: exitDate ? formatDate(format, exitDate) : null,
  })
}

function TradeForm() {
  const { id } = useParams()
  const tradesRef = useFirestore().collection('trades')
  const trade: Trade = useFirestoreDocData(tradesRef.doc(id || 'new'))

  const [activeEditTrade, setActiveEditTrade] = React.useState<Trade | null>(
    null,
  )

  async function onSubmit(trade) {
    const formData = JSON.parse(JSON.stringify(parseDateFields(trade)))
    formData.id
      ? await tradesRef.doc(formData.id).update(formData)
      : await tradesRef.add(formData)
  }

  function onFormFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    setActiveEditTrade(
      Object.assign({}, activeEditTrade, {
        [event.target.name]: event.target.value,
      }),
    )
  }

  return (
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
            value={trade?.pair}
            variant="outlined"
            onChange={onFormFieldChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            label="Quantity"
            helperText="Please specify the quantity"
            margin="dense"
            name="quantity"
            required
            value={trade?.quantity}
            variant="outlined"
            onChange={onFormFieldChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            label="Entry Date"
            margin="dense"
            name="entryDate"
            value={trade?.entryDate}
            variant="outlined"
            onChange={onFormFieldChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            label="Exit Date"
            margin="dense"
            name="exitDate"
            value={trade?.exitDate}
            variant="outlined"
            onChange={onFormFieldChange}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            label="Entry Price"
            margin="dense"
            name="entryPrice"
            value={trade?.entryPrice}
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
            value={trade?.exitPrice}
            variant="outlined"
            onChange={onFormFieldChange}
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
  )
}

function TradeFormPage() {
  return (
    <Layout>
      <SuspenseWithPerf fallback="loading trade.." traceId="load-trades-status">
        <TradeForm />
      </SuspenseWithPerf>
    </Layout>
  )
}

export default TradeFormPage
