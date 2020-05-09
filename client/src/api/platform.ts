import { API_URL } from '../constants/url'
import { extractData } from './common'

export function getPlatforms() {
  let url = `${API_URL}/platforms`
  return fetch(url).then(extractData)
}
