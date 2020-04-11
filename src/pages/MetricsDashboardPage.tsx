import React from 'react'
import Layout from '../components/Layout'
import { Card, CardContent, Grid } from '@material-ui/core'
import { useFirestore, useFirestoreDocData, SuspenseWithPerf } from 'reactfire'
import WinPercentage from '../components/WinPercentage'

function Dashboard() {
  const tradesRef = useFirestore().collection('metrics').doc('totals')
  const metrics: any = useFirestoreDocData(tradesRef)

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
        <WinPercentage metrics={metrics} />
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

function MetricsDashboardPage() {
  return (
    <Layout>
      <SuspenseWithPerf
        fallback={'loading trades..'}
        traceId={'load-trades-status'}
      >
        <Dashboard></Dashboard>
      </SuspenseWithPerf>
    </Layout>
  )
}

export default MetricsDashboardPage
