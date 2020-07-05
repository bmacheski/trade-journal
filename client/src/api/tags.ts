import { API_URL } from '../constants/url'
import { extractData } from './common'

const TAGS_URL = `${API_URL}/tags`

export function getTags() {
  return fetch(TAGS_URL).then(extractData)
}

export function createTag(data) {
  return fetch(TAGS_URL, {
    method: 'post',
    body: JSON.stringify({ tag: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(extractData)
}

export function updateTag(id, data) {
  const url = `${TAGS_URL}/${id}`
  return fetch(url, {
    method: 'put',
    body: JSON.stringify({ tag: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export function deleteTag(id) {
  const url = `${TAGS_URL}/${id}`
  return fetch(url, { method: 'delete' })
}

export function getTagMetrics() {
  let url = `${TAGS_URL}/metrics`
  return fetch(url).then(extractData)
}
