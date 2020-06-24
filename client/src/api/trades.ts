import { API_URL } from '../constants/url'
import { extractData } from './common'
import queryString from 'query-string'
import { Filter } from '../types'
import { buildFilterQueryString } from '../utils/filter'

const TRADES_URL = `${API_URL}/trades`

export const getTrade = (id: number | null = null) =>
  fetch(`${TRADES_URL}/${id}`).then(extractData)

export const getTrades = (
  page: number,
  sort: string | null,
  direction: 'asc' | 'desc' | 'none',
  countPerPage: number,
  filters: Filter[],
) => {
  const data = Object.assign({
    page,
    sort,
    direction: direction === 'none' ? null : direction,
    count_per_page: countPerPage,
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
