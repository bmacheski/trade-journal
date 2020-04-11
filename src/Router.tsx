import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MetricsDashboardPage from './pages/MetricsDashboardPage'
import TradeListPage from './pages/TradeListPage'
import TradeDetailPage from './pages/TradeDetailPage'
import TradeFormPage from './pages/TradeFormPage'

const ROUTES = {
  dashboard: '/',
  tradesList: '/trades',
  tradeDetail: '/trades/:id',
  tradeCreate: '/trades/new',
  tradeEdit: '/trades/:id/edit',
}

function Router() {
  return (
    <Switch>
      <Route exact path={ROUTES.dashboard}>
        <MetricsDashboardPage />
      </Route>
      <Route exact path={ROUTES.tradesList}>
        <TradeListPage />
      </Route>
      <Route exact path={[ROUTES.tradeCreate, ROUTES.tradeEdit]}>
        <TradeFormPage />
      </Route>
      <Route exact path={ROUTES.tradeDetail}>
        <TradeDetailPage />
      </Route>
    </Switch>
  )
}

export { Router, ROUTES }
