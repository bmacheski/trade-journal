import { API_URL } from '../constants/url'
import { extractData } from './common'

const PAIRS_URL = `${API_URL}/pairs`

export function getPairs() {
  return fetch(PAIRS_URL).then(extractData)
}
