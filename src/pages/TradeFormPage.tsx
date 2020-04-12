import React from 'react'
import { SuspenseWithPerf } from 'reactfire'
import Layout from '../components/Layout'
import TradeForm from '../components/TradeForm'

function TradeFormPage() {
  return (
    <Layout>
      <SuspenseWithPerf
        fallback="Loading trade form.."
        traceId="load-trades-status"
      >
        <TradeForm />
      </SuspenseWithPerf>
    </Layout>
  )
}

export default TradeFormPage
