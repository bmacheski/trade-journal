import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import TradeTable from '../TradeTable/TradeTable'
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography,
  CircularProgress,
} from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error'
import { getTrade } from '../../api/trades'
import useStyles from './TradeDetail.styles'

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

  if (loading) return <CircularProgress />

  if (redirect) return <Redirect to={redirect} />

  return (
    <>
      {trades.map((trade) => {
        return (
          <div key={trade.id}>
            <Card className={classes.card}>
              <CardHeader title="Trade Details"></CardHeader>
              <TradeTable
                title="Trade Detail"
                trades={trades}
                onEditClick={onEditClick}
                isDetailView={true}
                hideFilter={true}
              />
            </Card>
            {trade.image_url && (
              <Card className={classes.card}>
                <CardHeader title="Screenshot"></CardHeader>
                {loadImageError ? (
                  <div className={classes.messageContainer}>
                    <ErrorIcon />
                    <Typography variant="h6" className={classes.message}>
                      Error loading image
                    </Typography>
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
            {trade.trade_setups.length > 0 && (
              <Card className={classes.card}>
                <CardHeader title="Setups"></CardHeader>
                <Card>
                  <CardContent>
                    {trade.trade_setups.map(({ id, name }) => (
                      <Chip className={classes.chip} key={id} label={name} />
                    ))}
                  </CardContent>
                </Card>
              </Card>
            )}
            {trade.trade_setups.length > 0 && (
              <Card className={classes.card}>
                <CardHeader title="Tags"></CardHeader>
                <Card>
                  <CardContent>
                    {trade.trade_tags.map(({ id, name }) => (
                      <Chip className={classes.chip} key={id} label={name} />
                    ))}
                  </CardContent>
                </Card>
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
