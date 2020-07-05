import { API_URL } from '../constants/url'
import { extractData } from './common'

const PLATFORMS_URL = `${API_URL}/platforms`

export function getPlatforms() {
  return fetch(PLATFORMS_URL).then(extractData)
}

export function createPlatform(data) {
  return fetch(PLATFORMS_URL, {
    method: 'post',
    body: JSON.stringify({ platform: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(extractData)
}

export function updatePlatform(id, data) {
  const url = `${PLATFORMS_URL}/${id}`
  return fetch(url, {
    method: 'put',
    body: JSON.stringify({ platform: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export function deletePlatform(id) {
  const url = `${PLATFORMS_URL}/${id}`
  return fetch(url, { method: 'delete' })
}
