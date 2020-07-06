import React from 'react'
import { Button, CardHeader, Card } from '@material-ui/core'
import { buildTradesUrl } from '../api/trades'
import TradeTable from './TradeTable'
import { Filter, Trade, SortDirection } from '../types'
import Link from 'next/link'
import Router from 'next/router'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import some from 'lodash/some'

interface TradeListProps {
  trades: Trade[]
  pageCount: number
  page: number
  sortDirection: SortDirection
  sort: string
  selectedFilters: Filter[]
}

function TradeList({
  trades,
  pageCount,
  page,
  sortDirection,
  sort,
  selectedFilters,
}: TradeListProps) {
  const [url, setUrl] = React.useState<string | null>(null)

  function onToolbarItemSelect(incomingFilter: Filter) {
    setUrl(
      buildTradesUrl(
        page,
        sort,
        sortDirection,
        20,
        some(selectedFilters, incomingFilter)
          ? [
              ...selectedFilters.filter(
                (f) =>
                  f.name !== incomingFilter.name ||
                  f.value !== incomingFilter.value
              ),
            ]
          : [...selectedFilters, incomingFilter]
      )
    )
  }

  function onDeleteChip(idx: number) {
    setUrl(
      buildTradesUrl(page, sort, sortDirection, 20, [
        ...selectedFilters.filter((_, i) => i !== idx),
      ])
    )
  }

  function onSortChange(incomingSort: string) {
    const newDirection =
      sortDirection == SortDirection.Ascending || incomingSort !== sort
        ? SortDirection.Descending
        : SortDirection.Ascending

    setUrl(
      buildTradesUrl(page, incomingSort, newDirection, 20, selectedFilters)
    )
  }

  function setPage(incomingPage: number) {
    setUrl(
      buildTradesUrl(incomingPage, sort, sortDirection, 20, selectedFilters)
    )
  }

  React.useEffect(() => {
    if (url) {
      Router.push({
        pathname: '/trades',
        query: url,
      })
    }
  }, [url])

  return (
    <>
      <Link href="/trades/create">
        <Button color="primary" variant="contained">
          <AddCircleOutlineIcon></AddCircleOutlineIcon>&nbsp;Create Trade
        </Button>
      </Link>
      <Card style={{ marginTop: 10 }} elevation={0}>
        <CardHeader title="Trades" />
        <TradeTable
          showFilter={true}
          title="Trades"
          currPage={page}
          pageCount={pageCount}
          trades={trades}
          handlePageChange={(page) => setPage(page)}
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
