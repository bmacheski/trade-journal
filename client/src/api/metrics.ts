import { API_URL } from '../constants/url'

export function getMetrics() {
  let url = `${API_URL}/trades/metrics`
  return fetch(url).then(async (res) => {
    const json = await res.json()
    return json
  })
}
