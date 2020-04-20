import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MetricsDashboard from './components/Dashboard'
import TradeList from './components/TradeList'
import TradeForm from './components/TradeForm'
import TradeDetail from './components/TradeDetail'
import Layout from './components/Layout'

function createRoute(...paths: string[]): string {
  const ROUTE_BASE = '/trades'
  return [ROUTE_BASE, ...paths].join('/')
}

const ROUTES = {
  DASHBOARD: '/',
  TRADE_LIST: createRoute(),
  TRADE_DETAIL: createRoute(':id'),
  TREADE_CREATE: createRoute('new'),
  TRADE_EDIT: createRoute(':id', 'edit'),
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route exact path={ROUTES.DASHBOARD}>
          <MetricsDashboard />
        </Route>
        <Route exact path={ROUTES.TRADE_LIST}>
          <TradeList />
        </Route>
        <Route exact path={[ROUTES.TREADE_CREATE, ROUTES.TRADE_EDIT]}>
          <TradeForm />
        </Route>
        <Route exact path={ROUTES.TRADE_DETAIL}>
          <TradeDetail />
        </Route>
      </Switch>
    </Layout>
  )
}

export { Router, ROUTES }
