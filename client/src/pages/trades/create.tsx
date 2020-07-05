import LayoutWrapper from '../../components/Layout'
import React from 'react'
import { getTrade } from '../../api/trades'
import TradeForm from '../../components/TradeForm'

// trade create
export default ({ trade, id }) => {
  return (
    <LayoutWrapper>
      <div style={{ margin: '0px 40px 0 40px' }}>
        <h1>Create Trade</h1>
        <TradeForm />
      </div>
    </LayoutWrapper>
  )
}
