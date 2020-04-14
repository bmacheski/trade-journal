import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { REMOVE_TRADE, GET_TRADES } from '../queries'
import TradeTable from './TradeTable'
import { Create, Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function TradeList() {
  const { data: { trades } = { trades: [] } }: any = useQuery(GET_TRADES)
  const [deleteTrade, { loading: deleting }] = useMutation(REMOVE_TRADE)

  function updateCache(client, item) {
    const data = client.readQuery({
      query: GET_TRADES,
    })
    const newData = {
      trades: data.trades.filter(
        (t) => t.id !== item.data.delete_trades.returning[0].id,
      ),
    }
    client.writeQuery({
      query: GET_TRADES,
      data: newData,
    })
  }

  function onDeleteClick(id: string) {
    if (deleting) return
    deleteTrade({
      variables: { id },
      update: updateCache,
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
      key: 'actions',
      order: 8,
      render: (trade) => {
        return (
          <>
            <Link to={`/trades/${trade.id}/edit`}>
              <Create />
            </Link>
            <Delete onClick={() => onDeleteClick(trade.id)}></Delete>
          </>
        )
      },
    },
  ]

  return <TradeTable trades={trades} data={data} />
}

export default TradeList
