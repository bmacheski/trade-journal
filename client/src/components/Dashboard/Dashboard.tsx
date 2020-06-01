import React from 'react'
import { Card, CardContent, Grid, CardHeader } from '@material-ui/core'
import WinPercentage from '../WinPercentage/WinPercentage'
import { getTradeMetrics } from '../../api/trades'
import useStyles from './Dashboard.styles'
import SetupReport from '../SetupReport/SetupReport'
import MaterialTable from 'material-table'
import { getTagMetrics } from '../../api/tags'

function Dashboard() {
  const classes = useStyles()
  const [metrics, setMetrics] = React.useState<any>({})

  React.useEffect(() => {
    getTradeMetrics().then((res) => setMetrics(res))
  }, [])

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} sm={6} md={3} xl={3} xs={12}>
        <Card className={classes.card}>
          <CardContent>Total Trade Count: {metrics.total_count}</CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} sm={6} md={3} xl={3} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.long}> Longs: {metrics.long_count}</div>
            <div>Win Count: {metrics.long_win_count}</div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} sm={6} md={3} xl={3} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.short}> Shorts: {metrics.short_count}</div>
            <div>Win Count: {metrics.short_win_count}</div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} sm={6} md={3} xl={3} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <div>
              Average RRR: {Number(metrics.risk_reward_ratio_avg).toFixed(2)}
            </div>
            <div>Average R: {Number(metrics.risk_multiple_avg).toFixed(2)}</div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xl={4} xs={12}>
        <Card>
          <CardHeader title="Wins / Losses" />
          <CardContent>
            <WinPercentage
              height={340}
              winCount={metrics.win_count}
              lossCount={metrics.loss_count}
              totalCount={metrics.total_count}
            ></WinPercentage>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xl={4} xs={12}>
        <Card>
          <CardHeader title="Setups" />
          <CardContent>
            <SetupReport />
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xl={4} xs={12}>
        <Card>
          <CardHeader title="Tags" />
          <CardContent>
            <MaterialTable
              title=""
              columns={[
                {
                  field: 'name',
                  title: 'Setup Name',
                  render: (row) => (
                    <div style={{ textTransform: 'capitalize' }}>
                      {row.name}
                    </div>
                  ),
                },
                {
                  field: 'win_count',
                  title: 'Win Count',
                },
                {
                  field: 'loss_count',
                  title: 'Loss Count',
                },
              ]}
              data={(query) =>
                new Promise((resolve, reject) => {
                  getTagMetrics().then((res) => {
                    resolve({
                      data: res,
                      page: 0,
                      totalCount: 3,
                    })
                  })
                })
              }
              options={{
                search: false,
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard
