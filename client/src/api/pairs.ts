import { API_URL } from '../constants/url'
import { extractData } from './common'

const PAIRS_URL = `${API_URL}/pairs`

export function getPairs() {
  return fetch(PAIRS_URL).then(extractData)
}

export function createPair(data) {
  return fetch(PAIRS_URL, {
    method: 'post',
    body: JSON.stringify({ pair: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(extractData)
}

export function updatePair(id, data) {
  const url = `${PAIRS_URL}/${id}`
  return fetch(url, {
    method: 'put',
    body: JSON.stringify({ pair: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export function deletePair(id) {
  const url = `${PAIRS_URL}/${id}`
  return fetch(url, { method: 'delete' })
}
