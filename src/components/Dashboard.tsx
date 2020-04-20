import React from 'react'
import { Card, CardContent, Grid, CardHeader } from '@material-ui/core'
import WinPercentage from './WinPercentage'
import EquityGraph from './EquityGraph'
import { useQuery } from '@apollo/react-hooks'
import { GET_METRICS } from '../graphql/queries/trades.query'

function Dashboard() {
  const {
    data: { trade_metric } = { trade_metric: [] },
    refetch,
    loading,
  }: any = useQuery(GET_METRICS)
  const metrics = trade_metric[0] || {}

  React.useEffect(() => {
    // TODO: look into if this is needed
    if (!loading) {
      refetch()
    }
  }, [])

  const stats = [
    { value: metrics.return, name: 'Total Return' },
    { value: metrics.total_trades, name: 'Total Trades' },
    { value: metrics.longs, name: 'Longs' },
    { value: metrics.shorts, name: 'Shorts' },
  ]

  return (
    <Grid container spacing={4}>
      {stats.map((s) => {
        return (
          <Grid item lg={3} sm={6} xl={3} xs={12} key={s.name}>
            <Card>
              <CardContent>
                {s.name}: {s.value}
              </CardContent>
            </Card>
          </Grid>
        )
      })}
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <Card>
          <CardHeader title="Equity Graph" />
          <CardContent>
            <EquityGraph />
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Card>
          <CardHeader title="Wins / Losses" />
          <CardContent>
            <WinPercentage
              winCount={metrics.wins}
              totalCount={metrics.total_trades}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard
