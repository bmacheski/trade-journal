import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MetricsDashboard from './components/Dashboard/Dashboard'
import TradeList from './components/TradeList/TradeList'
import TradeForm from './components/TradeForm/TradeForm'
import TradeDetail from './components/TradeDetail/TradeDetail'
import Layout from './components/Layout/Layout'
import Admin from './components/Admin/Admin'

function createRoute(base, ...paths: string[]): string {
  return [base ? '/' + base : '', ...paths].join('/')
}

const ROUTES = {
  DASHBOARD: '/',
  TRADE_LIST: createRoute('trades'),
  TRADE_DETAIL: createRoute('trades', ':id'),
  TREADE_CREATE: createRoute('trades', 'new'),
  TRADE_EDIT: createRoute('trades', ':id', 'edit'),
  ADMIN: createRoute('admin'),
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
        <Route exact path={ROUTES.ADMIN}>
          <Admin />
        </Route>
      </Switch>
    </Layout>
  )
}

export { Router, ROUTES }
