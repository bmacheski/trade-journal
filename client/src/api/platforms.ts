import { API_URL } from '../constants/url'
import { extractData } from './common'

const PLATFORMS_URL = `${API_URL}/platforms`

export function getPlatforms() {
  return fetch(PLATFORMS_URL).then(extractData)
}
