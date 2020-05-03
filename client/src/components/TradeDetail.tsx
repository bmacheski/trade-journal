import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import TradeTable from './TradeTable'
import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import { ROUTES } from '../Router'
import ErrorIcon from '@material-ui/icons/Error'
import { getTrade } from '../api/trades'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    card: {
      marginTop: 10,
    },
    screenshot: {
      maxHeight: '70vh',
    },
    message: {
      padding: theme.spacing(2),
    },
    messageContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(1),
    },
  })
})

function TradeDetail() {
  const classes = useStyles()
  const { id }: any = useParams()

  const [loading, setLoading] = React.useState<boolean>(false)
  const [trades, setTrades] = React.useState<any[]>([])
  const [redirect, setRedirect] = React.useState<string>('')
  const [loadImageError, setLoadImageError] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (id === 'new') return
    setLoading(true)
    getTrade(id)
      .then((res) => setTrades([res]))
      .finally(() => setLoading(false))
  }, [])

  function onEditClick(id): void {
    setRedirect(`/trades/${id}/edit`)
  }

  if (redirect) return <Redirect to={redirect} />

  return (
    <>
      {trades.map((trade) => {
        return (
          <div key={trade.id}>
            <Card className={classes.card}>
              <CardHeader title="Trade Details"></CardHeader>
              <TradeTable trades={trades} onEditClick={onEditClick} />
            </Card>
            {trade.image_url && (
              <Card className={classes.card}>
                <CardHeader title="Screenshot"></CardHeader>
                {loadImageError ? (
                  <div className={classes.messageContainer}>
                    <ErrorIcon />
                    <span className={classes.message}>Error loading image</span>
                  </div>
                ) : (
                  <img
                    alt=""
                    className={classes.screenshot}
                    onError={() => setLoadImageError(true)}
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
      })}
    </>
  )
}

export default TradeDetail
