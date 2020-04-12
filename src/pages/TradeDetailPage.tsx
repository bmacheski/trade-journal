import React from 'react'
import Layout from '../components/Layout'
import { SuspenseWithPerf } from 'reactfire'
import TradeDetailTable from '../components/TradeDetailTable'

function TradeDetailPage() {
  return (
    <Layout>
      <SuspenseWithPerf
        fallback="Loading trade detail.."
        traceId="load-trade-detail-status"
      >
        <TradeDetailTable />
      </SuspenseWithPerf>
    </Layout>
  )
}

export default TradeDetailPage
