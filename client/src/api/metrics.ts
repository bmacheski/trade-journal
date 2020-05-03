import { API_URL } from '../constants/url'
import { extractData } from './common'

export function getMetrics() {
  let url = `${API_URL}/trades/metrics`
  return fetch(url).then(extractData)
}
