import LayoutWrapper from '../../../components/Layout'
import TradeDetail from '../../../components/TradeDetail'
import React from 'react'
import { getTrade } from '../../../api/trades'

// trade detail
export default ({ trade, id }) => {
  return (
    <LayoutWrapper>
      <TradeDetail trade={trade} id={id} />
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
