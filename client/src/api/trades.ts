import { API_URL } from '../constants/url'

export function getTrade(id: number | null = null) {
  const url = `${API_URL}/trades/${id}`
  return fetch(url).then(async (res) => {
    const json = await res.json()
    return json
  })
}

export function getTrades(page) {
  let url = `${API_URL}/trades`
  if (page) url += `?page=${page}`
  return fetch(url).then(async (res) => {
    const json = await res.json()
    return json
  })
}

export function createTrade(data) {
  const url = `${API_URL}/trades`
  return fetch(url, {
    method: 'post',
    body: JSON.stringify({ trade: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (res) => {
    return res
  })
}

export function updateTrade(id, data) {
  const url = `${API_URL}/trades/${id}`
  return fetch(url, {
    method: 'put',
    body: JSON.stringify({ trade: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (res) => {
    return res
  })
}

export function deleteTrade(id) {
  const url = `${API_URL}/trades/${id}`
  return fetch(url, { method: 'delete' }).then((res) => res)
}
