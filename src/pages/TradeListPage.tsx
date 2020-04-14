import React from 'react'
import Layout from '../components/Layout'
import { Button } from '@material-ui/core'
import TradeListTable from '../components/TradeListTable'
import { Link } from 'react-router-dom'
import { ROUTES } from '../Router'

function TradeListPage() {
  return (
    <Layout>
      <>
        <Link to={ROUTES.TREADE_CREATE}>
          <Button variant="contained" color="primary">
            Add Trade
          </Button>
        </Link>
        <TradeListTable />
      </>
    </Layout>
  )
}

export default TradeListPage
