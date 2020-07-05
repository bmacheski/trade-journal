import React from 'react'
import { Button, CardHeader, Card } from '@material-ui/core'
import { buildTradesUrl } from '../api/trades'
import TradeTable from './TradeTable'
import { Filter, Trade, SortDirection } from '../types'
import Link from 'next/link'
import Router from 'next/router'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

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
  function onToolbarItemSelect(value: Filter) {
    Router.push({
      pathname: '/trades',
      query: buildTradesUrl(page, sort, sortDirection, 20, [
        ...(selectedFilters.includes(value)
          ? [...selectedFilters.filter((f) => f !== value)]
          : [...selectedFilters, value]),
      ]),
    })
  }

  function onDeleteChip(idx: number) {
    Router.push({
      pathname: '/trades',
      query: buildTradesUrl(page, sort, sortDirection, 20, [
        ...selectedFilters.filter((_, i) => i !== idx),
      ]),
    })
  }

  function onSortChange(incomingSort: string) {
    const newDirection =
      sortDirection == SortDirection.Ascending || incomingSort !== sort
        ? SortDirection.Descending
        : SortDirection.Ascending

    Router.push({
      pathname: '/trades',
      query: buildTradesUrl(
        page,
        incomingSort,
        newDirection,
        20,
        selectedFilters
      ),
    })
  }

  function setPage(incomingPage: number) {
    Router.push({
      pathname: '/trades',
      query: buildTradesUrl(
        incomingPage,
        sort,
        sortDirection,
        20,
        selectedFilters
      ),
    })
  }

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
