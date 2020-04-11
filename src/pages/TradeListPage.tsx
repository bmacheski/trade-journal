import React from 'react'
import Layout from '../components/Layout'
import { Button } from '@material-ui/core'
import TradeTable from '../components/TradeTable'
import { Link } from 'react-router-dom'
import { ROUTES } from '../Router'
import { SuspenseWithPerf } from 'reactfire'

function TradeListPage() {
  return (
    <Layout>
      <SuspenseWithPerf
        fallback={'loading trades..'}
        traceId={'load-trades-status'}
      >
        <Link to={ROUTES.tradeCreate}>
          <Button variant="contained" color="primary">
            Add Trade
          </Button>
        </Link>
        <TradeTable />
      </SuspenseWithPerf>
    </Layout>
  )
}

export default TradeListPage
