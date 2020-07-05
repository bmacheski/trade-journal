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
  Button,
  IconButton,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Grid,
} from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error'
import { getTrade } from '../api/trades'
import { Trade } from '../types'
import Router from 'next/router'
import Link from 'next/link'
import EditIcon from '@material-ui/icons/Edit'

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
    sellBadge: {
      backgroundColor: '#f83245',
      color: '#fff',
    },
    buyBadge: {
      backgroundColor: '#1bc943',
      color: '#fff',
    },
  })
})

function TradeDetail({ trade, id }: { trade: Trade; id: string }) {
  const classes = useStyles()

  const [loadImageError, setLoadImageError] = React.useState<boolean>(false)

  return (
    <div key={trade.id}>
      <div>
        <Link href={`/trades/${id}/edit`}>
          <Button variant="contained" color="primary">
            <EditIcon />
            &nbsp; Edit Trade
          </Button>
        </Link>
      </div>
      <Grid container spacing={2}>
        <Grid item lg={4} md={12} sm={12} xl={4} xs={12}>
          <Card className={classes.card} elevation={0}>
            <CardHeader title="Trade Details"></CardHeader>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Pair</TableCell>
                  <TableCell>{trade.pair?.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Quantity</TableCell>
                  <TableCell>{trade.quantity}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={!trade.exit_date ? 'Open' : 'Closed'}
                      className={
                        !trade.exit_date ? classes.buyBadge : classes.sellBadge
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={trade.action === 'buy' ? 'Long' : 'Short'}
                      className={
                        trade.action === 'buy'
                          ? classes.buyBadge
                          : classes.sellBadge
                      }
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xl={4} xs={12}>
          <Card className={classes.card} elevation={0}>
            <CardHeader title="Entry Details"></CardHeader>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Entry Price</TableCell>
                  <TableCell>{trade.entry_price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Entry Date</TableCell>
                  <TableCell>{trade.entry_date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Stop Loss</TableCell>
                  <TableCell>{trade.stop_loss}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Take Profit</TableCell>
                  <TableCell>{trade.take_profit}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xl={4} xs={12}>
          <Card className={classes.card} elevation={0}>
            <CardHeader title="Exit Details"></CardHeader>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Exit Price</TableCell>
                  <TableCell>{trade.exit_price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Exit Date</TableCell>
                  <TableCell>{trade.exit_date}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </Grid>
      </Grid>
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
      <Grid container spacing={2}>
        <Grid item lg={6} md={12} sm={12} xl={6} xs={12}>
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
        </Grid>
        <Grid item lg={6} md={12} sm={12} xl={6} xs={12}>
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
        </Grid>
      </Grid>
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
