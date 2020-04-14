import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_TRADES } from '../graphql/queries/trades.query'
import TradeTable from './TradeTable'
import { Card, CardContent, CardHeader, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    marginTop: 10,
  },
  screenshot: {
    maxHeight: '70vh',
  },
})

function TradeDetail() {
  const styles = useStyles()
  const { id } = useParams()
  const { data: { trades } = { trades: [] } }: any = useQuery(GET_TRADES, {
    variables: { id },
  })

  if (!trades) return null

  return trades.map((trade) => {
    return (
      <div>
        <Card className={styles.card}>
          <CardHeader title="Trade Details"></CardHeader>
          <TradeTable trades={trades} showPagination={false} />
        </Card>
        {trade.image_url && (
          <Card className={styles.card}>
            <CardHeader title="Screenshot"></CardHeader>
            <img className={styles.screenshot} src={trade.image_url} />
          </Card>
        )}
        {trade.notes && (
          <Card className={styles.card}>
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
