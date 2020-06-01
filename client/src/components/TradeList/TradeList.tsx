import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { ROUTES } from '../../Router'
import { Button, CardHeader, Card, IconButton } from '@material-ui/core'
import { getTrades } from '../../api/trades'
import TradeTable from '../TradeTable/TradeTable'
import { buildAsyncRows } from '../../utils/asyncPagination'
import AddIcon from '@material-ui/icons/Add'

function TradeList() {
  const [redirect, setRedirect] = React.useState<string>('')

  if (redirect) return <Redirect to={redirect} />

  return (
    <>
      <Card style={{ marginTop: 10 }}>
        <CardHeader title="Trades">
          {' '}
          <Link to={ROUTES.TREADE_CREATE}>
            <IconButton color="primary">
              <AddIcon style={{ fontSize: '1rem' }}></AddIcon>
            </IconButton>
          </Link>
        </CardHeader>

        <TradeTable
          title="Trades"
          trades={(query) => buildAsyncRows(query, getTrades)}
          onRowClick={(_, row) => setRedirect(`/trades/${row.id}`)}
          onEditClick={(id) => setRedirect(`/trades/${id}/edit`)}
        />
      </Card>
    </>
  )
}

export default TradeList
