import { API_URL } from '../constants/url'

export function getPairs() {
  let url = `${API_URL}/pairs`
  return fetch(url).then(async (res) => {
    const json = await res.json()
    return json
  })
}
