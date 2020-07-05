import { Filter } from '../types'

export function buildFilterQueryString(filters: Filter[]) {
  let url = ''
  if (Array.isArray(filters) && filters.length) {
    url += `&`
    filters.forEach((f, idx) => {
      url += `f[]=${JSON.stringify(f)}`
      if (idx !== filters.length - 1) url += `&`
    })
  }

  return url
}
