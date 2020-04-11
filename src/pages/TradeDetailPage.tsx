import React from 'react'
import Layout from '../components/Layout'
import { useFirestore, useFirestoreDocData, SuspenseWithPerf } from 'reactfire'
import { useParams } from 'react-router-dom'
import { Trade } from '../trade.model'

function TradeDetail() {
  const { id } = useParams()

  const tradesRef = useFirestore().collection('trades').doc(id)
  const trade: Trade = useFirestoreDocData(tradesRef)

  return <div>{trade.pair}</div>
}

function TradeDetailPage() {
  return (
    <SuspenseWithPerf
      fallback="loading trade detail.."
      traceId="load-trade-detail-status"
    >
      <Layout>
        <TradeDetail />
      </Layout>
    </SuspenseWithPerf>
  )
}

export default TradeDetailPage
