import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MetricsDashboardPage from './pages/MetricsDashboardPage'
import TradeListPage from './pages/TradeListPage'
import TradeDetailPage from './pages/TradeDetailPage'
import TradeFormPage from './pages/TradeFormPage'

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
    <Switch>
      <Route exact path={ROUTES.DASHBOARD}>
        <MetricsDashboardPage />
      </Route>
      <Route exact path={ROUTES.TRADE_LIST}>
        <TradeListPage />
      </Route>
      <Route exact path={[ROUTES.TREADE_CREATE, ROUTES.TRADE_EDIT]}>
        <TradeFormPage />
      </Route>
      <Route exact path={ROUTES.TRADE_DETAIL}>
        <TradeDetailPage />
      </Route>
    </Switch>
  )
}

export { Router, ROUTES }
