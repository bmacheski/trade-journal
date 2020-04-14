import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { REMOVE_TRADE, GET_TRADES } from '../graphql/queries/trades.query'
import TradeTable from './TradeTable'
import { Create, Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'

function TradeList() {
  const {
    data: { trades, trades_aggregate } = { trades: [], trades_aggregate: {} },
    refetch,
  }: any = useQuery(GET_TRADES)
  const [deleteTrade, { loading: deleting }] = useMutation(REMOVE_TRADE)

  function onDeleteClick(id: string) {
    if (deleting) return
    deleteTrade({
      variables: { id },
      refetchQueries: [{ query: GET_TRADES }],
    })
  }

  const data = [
    {
      header: 'Pair',
      key: 'pair',
      order: 1,
      render: (trade) => {
        return <Link to={`/trades/${trade.id}`}> {trade.pair}</Link>
      },
    },
    {
      header: 'Actions',
      headerDisabled: true,
      key: 'actions',
      order: 8,
      render: (trade) => {
        return (
          <>
            <Link to={`/trades/${trade.id}/edit`}>
              <IconButton>
                <Create />
              </IconButton>
            </Link>
            <IconButton>
              <Delete onClick={() => onDeleteClick(trade.id)}></Delete>
            </IconButton>
          </>
        )
      },
    },
  ]

  return (
    <TradeTable
      trades={trades}
      data={data}
      totalCount={trades_aggregate?.aggregate?.count}
      onRefresh={refetch}
    />
  )
}

export default TradeList
