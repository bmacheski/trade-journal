import { API_URL } from '../constants/url'

export function getSetups() {
  let url = `${API_URL}/setups`
  return fetch(url).then(async (res) => {
    const json = await res.json()
    return json
  })
}

export function createSetup(data) {
  let url = `${API_URL}/setups`
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (res) => {
    const json = await res.json()
    return json
  })
}

export function deleteSetup(id) {
  const url = `${API_URL}/setups/${id}`
  return fetch(url, { method: 'delete' }).then((res) => res)
}
