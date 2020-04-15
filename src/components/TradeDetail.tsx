import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_TRADES } from '../graphql/queries/trades.query'
import TradeTable from './TradeTable'
import { Card, CardContent, CardHeader, makeStyles } from '@material-ui/core'
import { ROUTES } from '../Router'

const useStyles = makeStyles({
  card: {
    marginTop: 10,
  },
  screenshot: {
    maxHeight: '70vh',
  },
})

function TradeDetail() {
  const classes = useStyles()
  const { id } = useParams()
  const { data: { trades } = { trades: [] } }: any = useQuery(GET_TRADES, {
    variables: { id },
  })
  const [redirect, setRedirect] = React.useState<string>('')

  function onDeleteSucces() {
    setRedirect(ROUTES.TRADE_LIST)
  }

  if (redirect) return <Redirect to={redirect} />

  if (!trades) return null

  return trades.map((trade) => {
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader title="Trade Details"></CardHeader>
          <TradeTable
            trades={trades}
            showPagination={false}
            onDeleteSuccess={onDeleteSucces}
          />
        </Card>
        {trade.image_url && (
          <Card className={classes.card}>
            <CardHeader title="Screenshot"></CardHeader>
            <img className={classes.screenshot} src={trade.image_url} />
          </Card>
        )}
        {trade.notes && (
          <Card className={classes.card}>
            <CardHeader title="Notes"></CardHeader>
            <Card>
              <CardContent>{trade.notes}</CardContent>
            </Card>
          </Card>
        )}
      </div>
    )
  })
}

export default TradeDetail
