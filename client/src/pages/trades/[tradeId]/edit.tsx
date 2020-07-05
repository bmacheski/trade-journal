import LayoutWrapper from '../../../components/Layout'
import React from 'react'
import { getTrade } from '../../../api/trades'
import TradeForm from '../../../components/TradeForm'

// trade edit
export default ({ trade, id }) => {
  return (
    <LayoutWrapper>
      <h1>Edit Trade</h1>
      <TradeForm trade={trade} id={id} />
    </LayoutWrapper>
  )
}

export async function getServerSideProps({ params }) {
  const trade = await getTrade(params.tradeId)
  return {
    props: {
      id: params.tradeId,
      trade,
    },
  }
}
