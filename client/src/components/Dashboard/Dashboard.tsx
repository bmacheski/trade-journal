import React from 'react'
import { Card, CardContent, Grid, CardHeader } from '@material-ui/core'
import WinPercentage from '../WinPercentage/WinPercentage'
import { getMetrics } from '../../api/metrics'
import useStyles from './Dashboard.styles'

function Dashboard() {
  const classes = useStyles()

  const [metrics, setMetrics] = React.useState<any>({})

  React.useEffect(() => {
    getMetrics().then((res) => setMetrics(res))
  }, [])

  return (
    <Grid container spacing={4}>
      <Grid item lg={4} sm={12} md={4} xl={4} xs={12}>
        <Card className={classes.card}>
          <CardContent>Total Trade Count: {metrics.total_count}</CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} sm={12} md={4} xl={4} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.long}> Longs: {metrics.long_count}</div>
            <div>Win Count: {metrics.long_win_count}</div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} sm={12} md={4} xl={4} xs={12}>
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
