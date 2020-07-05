import React from 'react'
import TradeList from '../../components/TradeList'
import LayoutWrapper from '../../components/Layout'
import { getTrades } from '../../api/trades'
import { SortDirection } from '../../types'

export default ({
  trades,
  pageCount,
  page,
  direction,
  sort,
  selectedFilters,
}) => {
  return (
    <LayoutWrapper>
      <TradeList
        trades={trades}
        pageCount={pageCount}
        page={page}
        sortDirection={direction}
        sort={sort}
        selectedFilters={selectedFilters}
      />
    </LayoutWrapper>
  )
}

export async function getServerSideProps({ query }) {
  const { count, direction = SortDirection.Ascending, page, sort } = query

  const queryFilter = query['filters[]'] || null
  const queryFilterArr = Array.isArray(queryFilter)
    ? [...queryFilter]
    : [queryFilter]
  const filters = queryFilterArr.filter((f) => f).map((f) => JSON.parse(f))
  const { data: trades = [], meta = {} } = await getTrades(
    page,
    sort,
    direction,
    count,
    filters
  )

  return {
    props: {
      trades,
      pageCount: meta.page_count || 0,
      page: meta.page || 1,
      direction: direction || '',
      sort: sort || '',
      selectedFilters: filters || [],
    },
  }
}
