import { API_URL } from '../constants/url'
import { extractData } from './common'

const TAGS_URL = `${API_URL}/tags`

export function getTags() {
  return fetch(TAGS_URL).then(extractData)
}

export function getTagMetrics() {
  let url = `${TAGS_URL}/metrics`
  return fetch(url).then(extractData)
}
