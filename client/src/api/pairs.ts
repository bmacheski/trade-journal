import { API_URL } from '../constants/url'
import { extractData } from './common'

export function getPairs() {
  let url = `${API_URL}/pairs`
  return fetch(url).then(extractData)
}
