import React from 'react'
import Layout from '../components/Layout'
import { Button } from '@material-ui/core'
import TradeList from '../components/TradeList'
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
        <TradeList />
      </>
    </Layout>
  )
}

export default TradeListPage
