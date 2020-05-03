import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { ROUTES } from '../Router'
import { Button } from '@material-ui/core'
import { getTrades } from '../api/trades'
import first from 'lodash/first'
import TradeTable from './TradeTable'

function TradeList() {
  const [redirect, setRedirect] = React.useState<string>('')

  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'LOADING':
          return {
            ...state,
            loading: action.loading,
          }
        case 'FETCH_TRADES':
          return {
            ...state,
            trades: action.trades,
          }
        case 'CHANGE_SORT':
          return {
            ...state,
            sort: action.sort,
            sortDirection:
              state.sort == action.sort
                ? state.sortDirection == 'asc'
                  ? 'desc'
                  : 'asc'
                : 'asc',
          }
        case 'CHANGE_PAGE':
          return {
            ...state,
            page: action.page,
          }
      }
      return state
    },
    {
      loading: false,
      page: 1,
      trades: [],
      sort: null,
      sortDirection: 'asc',
    },
  )

  const handleGetTrades = () => {
    dispatch({
      type: 'LOADING',
      loading: true,
    })
    getTrades(state.page)
      .then((data) =>
        dispatch({
          type: 'FETCH_TRADES',
          trades: data,
        }),
      )
      .finally(() =>
        dispatch({
          type: 'LOADING',
          loading: false,
        }),
      )
  }

  React.useEffect(() => {
    handleGetTrades()
  }, [])

  if (redirect) return <Redirect to={redirect} />

  return (
    <>
      <Link to={ROUTES.TREADE_CREATE}>
        <Button variant="contained" color="primary">
          Add Trade
        </Button>
      </Link>
      <TradeTable
        trades={state.trades}
        onRowClick={(_, row) => {
          setRedirect(`/trades/${row.id}`)
        }}
        onEditClick={(id) => setRedirect(`/trades/${id}/edit`)}
      />
    </>
  )
}

export default TradeList
