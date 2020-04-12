import React from 'react'
import Layout from '../components/Layout'
import { SuspenseWithPerf } from 'reactfire'
import Dashboard from '../components/Dashboard'

function MetricsDashboardPage() {
  return (
    <Layout>
      <SuspenseWithPerf
        fallback="loading dashboard"
        traceId="load-dashboard-status"
      >
        <Dashboard />
      </SuspenseWithPerf>
    </Layout>
  )
}

export default MetricsDashboardPage
