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
import { getTradeMetrics } from '../api/trades'
import { getTagMetrics } from '../api/tags'
import { Metrics } from '../types'
import Table from './Table'
import { getSetupMetrics } from '../api/setups'

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
  const [metrics, setMetrics] = React.useState<Metrics | null>(null)
  const [tagMetrics, setTagMetrics] = React.useState<any[]>([])
  const [setupMetrics, setSetupMetrics] = React.useState<any[]>([])

  React.useEffect(() => {
    getSetupMetrics().then((res) => setSetupMetrics(res))
    getTradeMetrics().then((res) => setMetrics(res))
    getTagMetrics().then((res) => setTagMetrics(res))
  }, [])

  function renderContent() {
    if (!metrics) return null
    return (
      <>
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
              <div className={classes.short}>
                {' '}
                Shorts: {metrics.short_count}
              </div>
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
              <div>
                Average R: {Number(metrics.risk_multiple_avg).toFixed(2)}
              </div>
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
              <Table
                columns={[
                  {
                    field: 'name',
                    title: 'Setup Name',
                    render: (val) => (
                      <div style={{ textTransform: 'capitalize' }}>
                        {val.name}
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
                items={setupMetrics}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xl={4} xs={12}>
          <Card>
            <CardHeader title="Tags" />
            <CardContent>
              <Table
                items={tagMetrics}
                columns={[
                  {
                    field: 'name',
                    title: 'Setup Name',
                    render: ({ name }) => (
                      <div style={{ textTransform: 'capitalize' }}>{name}</div>
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
              />
            </CardContent>
          </Card>
        </Grid>
      </>
    )
  }

  return (
    <Grid container spacing={4}>
      {renderContent()}
    </Grid>
  )
}

export default Dashboard
