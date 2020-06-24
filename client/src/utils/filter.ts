import { Filter } from '../types'

export function buildFilterQueryString(filters: Filter[]) {
  let url = ''
  if (filters.length) {
    url += '&'
    filters.forEach((e, idx) => {
      url += `${e.name}[]=${e.value}`
      if (idx != filters.length - 1) url += '&'
    })
  }
  return url
}
