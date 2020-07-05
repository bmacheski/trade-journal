import LayoutWrapper from '../../components/Layout'
import TradeDetail from '../../components/TradeDetail'

import React from 'react'
import { getTrade } from '../../api/trades'

export default ({ trade, id }) => {
  return (
    <LayoutWrapper>
      <TradeDetail trade={trade} id={id} />
    </LayoutWrapper>
  )
}

export async function getServerSideProps({ params }) {
  const trade = await getTrade(params.id)
  return {
    props: {
      id: params.id,
      trade,
    },
  }
}
