import { API_URL } from '../constants/url'
import { extractData } from './common'

export function getSetups() {
  let url = `${API_URL}/setups`
  return fetch(url).then(extractData)
}

export function createSetup(data) {
  let url = `${API_URL}/setups`
  return fetch(url, {
    method: 'post',
    body: JSON.stringify({ setup: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(extractData)
}

export function updateSetup(id, data) {
  const url = `${API_URL}/setups/${id}`
  return fetch(url, {
    method: 'put',
    body: JSON.stringify({ setup: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export function deleteSetup(id) {
  const url = `${API_URL}/setups/${id}`
  return fetch(url, { method: 'delete' })
}
