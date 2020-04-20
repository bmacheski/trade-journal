import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_TRADES } from '../graphql/queries/trades.query'
import TradeTable from './TradeTable'
import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  createStyles,
} from '@material-ui/core'
import { ROUTES } from '../Router'
import ErrorIcon from '@material-ui/icons/Error'

const useStyles = makeStyles(() => {
  return createStyles({
    card: {
      marginTop: 10,
    },
    screenshot: {
      maxHeight: '70vh',
    },
  })
})

function TradeDetail() {
  const classes = useStyles()
  const { id } = useParams()
  const { data: { trade: trades } = { trade: [] } }: any = useQuery(
    GET_TRADES,
    {
      variables: { id },
    },
  )
  const [redirect, setRedirect] = React.useState<string>('')
  const [loadImageError, setLoadImageError] = React.useState<boolean>(false)

  function onDeleteSucces() {
    setRedirect(ROUTES.TRADE_LIST)
  }

  if (redirect) return <Redirect to={redirect} />

  if (!trades) return null

  return trades.map((trade) => {
    return (
      <div key={trade.id}>
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
            {loadImageError ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '5px',
                }}
              >
                <ErrorIcon />
                <span style={{ padding: '10px' }}>Error loading image</span>
              </div>
            ) : (
              <img
                alt=""
                className={classes.screenshot}
                onError={(err) => {
                  setLoadImageError(true)
                }}
                src={trade.image_url}
              />
            )}
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
