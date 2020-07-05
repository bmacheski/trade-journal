import { Filter } from '../types'

export function buildFilterQueryString(
  filters: Filter[],
  isRequestQueryParam: boolean = false
) {
  let url = ''
  if (Array.isArray(filters) && filters.length) {
    url += `&`
    filters.forEach((f, idx) => {
      url += !isRequestQueryParam
        ? `filters[]=${JSON.stringify(f)}`
        : `${f.name}[]=${f.value}`
      if (idx !== filters.length - 1) url += `&`
    })
  }

  return url
}
