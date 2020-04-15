import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_TRADES } from '../graphql/queries/trades.query'
import TradeTable from './TradeTable'
import { Redirect } from 'react-router-dom'

function TradeList() {
  const {
    data: { trades, trades_aggregate } = { trades: [], trades_aggregate: {} },
    refetch,
  }: any = useQuery(GET_TRADES)

  const [redirect, setRedirect] = React.useState<string>('')

  function onRowClick(tradeId: string) {
    setRedirect(`/trades/${tradeId}`)
  }

  if (redirect) return <Redirect to={redirect} />

  return (
    <TradeTable
      onRowClick={onRowClick}
      trades={trades}
      totalCount={trades_aggregate?.aggregate?.count}
      onRefresh={refetch}
    />
  )
}

export default TradeList
