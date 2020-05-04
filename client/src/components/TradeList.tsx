import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { ROUTES } from '../Router'
import { Button } from '@material-ui/core'
import { getTrades } from '../api/trades'
import TradeTable from './TradeTable'

function TradeList() {
  const [redirect, setRedirect] = React.useState<string>('')

  if (redirect) return <Redirect to={redirect} />

  return (
    <>
      <Link to={ROUTES.TREADE_CREATE}>
        <Button variant="contained" color="primary">
          Add Trade
        </Button>
      </Link>
      <TradeTable
        trades={(query) => {
          return new Promise((resolve, reject) => {
            const page = query.page + 1
            const orderBy = query.orderBy?.field
            getTrades(page, orderBy, query.orderDirection).then((res) => {
              resolve({
                data: res,
                page: 1,
                totalCount: 6,
              })
            })
          })
        }}
        onRowClick={(_, row) => setRedirect(`/trades/${row.id}`)}
        onEditClick={(id) => setRedirect(`/trades/${id}/edit`)}
      />
    </>
  )
}

export default TradeList
