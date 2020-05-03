import React from 'react'
import {
  Card,
  CardContent,
  Grid,
  CardHeader,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import WinPercentage from './WinPercentage'
import { getMetrics } from '../api/metrics'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    card: {
      minHeight: 100,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      fontSize: 20,
    },
    long: {
      color: 'green',
    },
    short: {
      color: 'red',
    },
  })
})

function Dashboard() {
  const classes = useStyles()

  const [metrics, setMetrics] = React.useState<any>({})

  React.useEffect(() => {
    getMetrics().then((res) => setMetrics(res))
  }, [])

  return (
    <Grid container spacing={4}>
      <Grid item lg={6} sm={6} xl={4} xs={12}>
        <Card className={classes.card}>
          <CardContent>Total Trade Count: {metrics.total_count}</CardContent>
        </Card>
      </Grid>
      <Grid item lg={6} sm={6} xl={4} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.long}> Longs: {metrics.long_count}</div>
            <div>Win Count: {metrics.long_win_count}</div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={6} sm={6} xl={4} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.short}> Shorts: {metrics.short_count}</div>
            <div>Win Count: {metrics.short_win_count}</div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={6} md={12} xl={6} xs={12}>
        <Card>
          <CardHeader title="Wins / Losses" />
          <CardContent>
            <WinPercentage
              winCount={metrics.win_count}
              totalCount={metrics.total_count}
            ></WinPercentage>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={6} md={12} xl={6} xs={12}>
        <Card>
          <CardHeader title="Equity Graph" />
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard
