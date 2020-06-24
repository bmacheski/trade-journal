import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { ROUTES } from '../Router'
import { Button, CardHeader, Card } from '@material-ui/core'
import { getTrades } from '../api/trades'
import TradeTable from './TradeTable'
import { Filter } from '../types'

function TradeList() {
  const [redirect, setRedirect] = React.useState<string>('')
  const [trades, setTrades] = React.useState<any[]>([])
  const [pageCount, setPageCount] = React.useState<number>(0)
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>(
    'asc',
  )
  const [sort, setSort] = React.useState<string | null>(null)
  const [page, setPage] = React.useState<number>(1)
  const [selectedFilters, setSelectedFilters] = React.useState<Filter[]>([])

  function onToolbarItemSelect(value: Filter) {
    setSelectedFilters((prevFilters) => {
      return prevFilters.includes(value)
        ? [...prevFilters.filter((f) => f != value)]
        : [...prevFilters, value]
    })
  }

  function onDeleteChip(idx: number) {
    setSelectedFilters((prevFilters) => [
      ...prevFilters.filter((_, i) => i != idx),
    ])
  }

  function onSortChange(incomingSort: string) {
    const prevSort = sort
    setSort(incomingSort)
    setSortDirection((prevDir) =>
      prevDir == 'asc' || incomingSort != prevSort ? 'desc' : 'asc',
    )
  }

  React.useEffect(() => {
    function fetchTrades() {
      getTrades(page, sort, sortDirection, 20, selectedFilters).then((res) => {
        setPageCount(res.meta.page_count)
        setTrades(res.data)
        setPage(res.meta.page)
      })
    }
    fetchTrades()
  }, [page, selectedFilters, sort, sortDirection])

  if (redirect) return <Redirect to={redirect} />

  return (
    <>
      <Link to={ROUTES.TREADE_CREATE}>
        <Button color="primary" variant="contained">
          Add Trade
        </Button>
      </Link>
      <Card style={{ marginTop: 10 }}>
        <CardHeader title="Trades"></CardHeader>
        <TradeTable
          showFilter={true}
          title="Trades"
          currPage={page}
          pageCount={pageCount}
          trades={trades}
          handlePageChange={(page) => setPage(page)}
          onRowClick={(id) => setRedirect(`/trades/${id}`)}
          onEditClick={(id) => setRedirect(`/trades/${id}/edit`)}
          selectedFilters={selectedFilters}
          onToolbarItemSelect={onToolbarItemSelect}
          sortDirection={sortDirection}
          orderBy={sort}
          onSortClick={onSortChange}
          onChipClick={onDeleteChip}
        />
      </Card>
    </>
  )
}

export default TradeList
