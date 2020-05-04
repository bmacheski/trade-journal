import { API_URL } from '../constants/url'
import { extractData } from './common'

const TRADES_URL = `${API_URL}/trades`

export function getTrade(id: number | null = null) {
  const url = `${TRADES_URL}/${id}`
  return fetch(url).then(extractData)
}

export function getTrades(page: number, sort: string, direction: string) {
  let url = TRADES_URL
  if (page) url += `?page=${page}`
  if (sort) url += `&sort=${sort}`
  if (direction) url += `&direction=${direction}`
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
