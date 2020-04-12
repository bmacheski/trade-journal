import React from 'react'
import Layout from '../components/Layout'
import { Button } from '@material-ui/core'
import TradeListTable from '../components/TradeListTable'
import { Link } from 'react-router-dom'
import { ROUTES } from '../Router'
import { SuspenseWithPerf } from 'reactfire'

function TradeListPage() {
  return (
    <Layout>
      <SuspenseWithPerf
        fallback="Loading trades.."
        traceId="load-trades-status"
      >
        <Link to={ROUTES.TREADE_CREATE}>
          <Button variant="contained" color="primary">
            Add Trade
          </Button>
        </Link>
        <TradeListTable />
      </SuspenseWithPerf>
    </Layout>
  )
}

export default TradeListPage
