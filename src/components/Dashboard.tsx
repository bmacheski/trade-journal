import React from 'react'
import { Card, CardContent, Grid } from '@material-ui/core'
import WinPercentage from '../components/WinPercentage'
import EquityGraph from '../components/EquityGraph'
import { useQuery } from '@apollo/react-hooks'
import { GET_METRICS } from '../graphql/queries/trades.query'

function Dashboard() {
  const {
    data: { trade_metrics } = { trade_metrics: [] },
    refetch,
    loading,
  }: any = useQuery(GET_METRICS)
  const metrics = trade_metrics[0] || {}

  React.useEffect(() => {
    // TODO: look into if this is needed
    if (!loading) {
      refetch()
    }
  }, [])

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <Card>
          <CardContent>Total Return: ${metrics.return || 0}</CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <Card>
          <CardContent>Total Trades: {metrics.total_trades || 0}</CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <Card>
          <CardContent>Longs: {metrics.longs}</CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <Card>
          <CardContent>Shorts: {metrics.shorts}</CardContent>
        </Card>
      </Grid>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <EquityGraph />
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Card>
          <WinPercentage
            winCount={metrics.wins}
            totalCount={metrics.total_trades}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard
