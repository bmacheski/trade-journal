import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_TRADES } from '../graphql/queries/trades.query'
import TradeTable from './TradeTable'
import { Redirect, Link } from 'react-router-dom'
import { ROUTES } from '../Router'
import { Button } from '@material-ui/core'
import { GetTradeQuery } from '../generated/graphql'

function TradeList() {
  const { data, refetch } = useQuery<GetTradeQuery>(GET_TRADES)

  const [redirect, setRedirect] = React.useState<string>('')

  function onRowClick(tradeId: string) {
    setRedirect(`/trades/${tradeId}`)
  }

  if (redirect) return <Redirect to={redirect} />

  return (
    <>
      <Link to={ROUTES.TREADE_CREATE}>
        <Button variant="contained" color="primary">
          Add Trade
        </Button>
      </Link>
      <TradeTable
        onRowClick={onRowClick}
        trades={data?.trade || []}
        totalCount={data?.trade_aggregate.aggregate?.count || 0}
        onRefresh={refetch}
      />
    </>
  )
}

export default TradeList
