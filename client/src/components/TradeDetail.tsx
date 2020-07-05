import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import TradeTable from './TradeTable'
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography,
  CircularProgress,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error'
import { getTrade } from '../api/trades'
import { Trade } from '../types'
import Router from 'next/router'

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
    chip: {
      margin: theme.spacing(0.5),
    },
  })
})

function TradeDetail({ trade, id }: { trade: Trade; id: string }) {
  const classes = useStyles()

  const [loadImageError, setLoadImageError] = React.useState<boolean>(false)

  return (
    <div key={trade.id}>
      <Card className={classes.card} elevation={0}>
        <TradeTable
          title=""
          trades={Array(trade)}
          onEditClick={() => Router.push(`/trades/${id}/edit`)}
          isDetailView={true}
          showFilter={false}
        />
      </Card>
      {trade.image_url && (
        <Card className={classes.card} elevation={0}>
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
      {trade.trade_setups?.length > 0 && (
        <Card className={classes.card} elevation={0}>
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
      {trade.trade_tags?.length > 0 && (
        <Card className={classes.card} elevation={0}>
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
        <Card className={classes.card} elevation={0}>
          <CardHeader title="Notes"></CardHeader>
          <Card>
            <CardContent>{trade.notes}</CardContent>
          </Card>
        </Card>
      )}
    </div>
  )
}

export default TradeDetail
