import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_TRADES } from '../queries'
import TradeTable from './TradeTable'

function TradeDetailTable() {
  const { id } = useParams()
  const { data: { trades } = { trades: [] } }: any = useQuery(GET_TRADES, {
    variables: { id },
  })

  if (!trades) return null

  return trades.map((trade) => {
    return (
      <div>
        <h1>Trade Detail</h1>
        <TradeTable trades={trades} />
        {trade.image_url && (
          <>
            <h2>Attachments</h2>
            <img style={{ maxHeight: '70vh' }} src={trade.image_url} />
          </>
        )}
      </div>
    )
  })
}

export default TradeDetailTable
