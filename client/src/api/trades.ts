import { API_URL } from '../constants/url'
import { extractData } from './common'
import queryString from 'query-string'

const TRADES_URL = `${API_URL}/trades`

export function getTrade(id: number | null = null) {
  const url = `${TRADES_URL}/${id}`
  return fetch(url).then(extractData)
}

export function getTrades(
  page: number,
  sort: string | undefined,
  direction: 'asc' | 'desc' | 'none',
  countPerPage: number,
) {
  const url = `${TRADES_URL}?${queryString.stringify({
    page,
    sort,
    direction: direction === 'none' ? null : direction,
    count_per_page: countPerPage,
  })}`
  return fetch(url).then(extractData)
}

export function createTrade(data) {
  return fetch(TRADES_URL, {
    method: 'post',
    body: JSON.stringify({ trade: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export function updateTrade(id, data) {
  const url = `${TRADES_URL}/${id}`
  return fetch(url, {
    method: 'put',
    body: JSON.stringify({ trade: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export function deleteTrade(id) {
  const url = `${TRADES_URL}/${id}`
  return fetch(url, { method: 'delete' })
}

export function getTradeMetrics() {
  const url = `${TRADES_URL}/metrics`
  return fetch(url).then(extractData)
}
