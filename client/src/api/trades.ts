import { API_URL } from '../constants/url'
import { extractData } from './common'
import queryString from 'query-string'
import { Filter, SortDirection } from '../types'
import { buildFilterQueryString } from '../utils/filter'
import pickBy from 'lodash/pickBy'

const TRADES_URL = `${API_URL}/trades`

export const getTrade = (id: number | null = null) =>
  fetch(`${TRADES_URL}/${id}`).then(extractData)

// utility for useSWR to replace `getTrades`
export const buildTradesUrl = (
  page: number,
  sort: string | null,
  direction: SortDirection | null,
  countPerPage: number,
  filters: Filter[]
) => {
  const data = Object.assign(
    {},
    {
      page,
      sort,
      direction: direction || null,
      count: countPerPage,
    }
  )

  let url = `${queryString.stringify(pickBy(data))}`
  url += buildFilterQueryString(filters)
  return url
}

// TODO: remove
export const getTrades = (
  page: number,
  sort: string | null = null,
  direction: SortDirection | null,
  countPerPage: number,
  filters: Filter[]
) => {
  const data = Object.assign({
    page,
    sort,
    direction: direction || null,
    count: countPerPage,
  })

  let url = `${TRADES_URL}?${queryString.stringify(data)}`
  url += buildFilterQueryString(filters)
  return fetch(url).then(extractData)
}

export const createTrade = (data) =>
  fetch(TRADES_URL, {
    method: 'post',
    body: JSON.stringify({ trade: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

export const updateTrade = (id, data) =>
  fetch(`${TRADES_URL}/${id}`, {
    method: 'put',
    body: JSON.stringify({ trade: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

export const deleteTrade = (id) =>
  fetch(`${TRADES_URL}/${id}`, { method: 'delete' })

export const getTradeMetrics = () =>
  fetch(`${TRADES_URL}/metrics`).then(extractData)

export const getTradeFilters = (): Promise<Filter[]> =>
  fetch(`${TRADES_URL}/filters`).then(extractData)
