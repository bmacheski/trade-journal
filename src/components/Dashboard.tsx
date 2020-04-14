import React from 'react'
import { Card, CardContent, Grid } from '@material-ui/core'
import WinPercentage from '../components/WinPercentage'
import EquityGraph from '../components/EquityGraph'

function Dashboard() {
  // TODO: replace with actual data
  const TEMP_METRICS = {
    return: 1000,
    count: 20,
    shorts: 10,
    longs: 10,
    wins: 12,
    losses: 8,
  }
  const metrics = TEMP_METRICS

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <Card>
          <CardContent>Total Return: ${metrics.return || 0}</CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <Card>
          <CardContent>Total Trades: {metrics.count || 0}</CardContent>
        </Card>
      </Grid>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <Card>
          <CardContent>Longs: {metrics.shorts}</CardContent>
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
          <WinPercentage metrics={metrics} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard
