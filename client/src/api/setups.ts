import { API_URL } from '../constants/url'
import { extractData } from './common'

export interface Setup {
  id: number
  name: string
  setup_id?: number
}

const SETUPS_URL = `${API_URL}/setups`

export function getSetups() {
  return fetch(SETUPS_URL).then(extractData)
}

export function createSetup(data) {
  return fetch(SETUPS_URL, {
    method: 'post',
    body: JSON.stringify({ setup: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(extractData)
}

export function updateSetup(id, data) {
  const url = `${SETUPS_URL}/${id}`
  return fetch(url, {
    method: 'put',
    body: JSON.stringify({ setup: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export function deleteSetup(id) {
  const url = `${SETUPS_URL}/${id}`
  return fetch(url, { method: 'delete' })
}

export function getSetupMetrics() {
  const url = `${SETUPS_URL}/metrics`
  return fetch(url).then(extractData)
}
