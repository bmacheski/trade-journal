import { Query } from 'material-table'

type AsyncFn = (
  page: number,
  orderBy: string | undefined,
  orderDirection: 'asc' | 'desc',
  count: number,
) => Promise<any>

export function buildAsyncRows(query: Query<object>, fn: AsyncFn) {
  return new Promise((resolve) => {
    const page = query.page + 1
    const orderBy = query.orderBy?.field
    fn(page, orderBy, query.orderDirection, 2)
      .then((res) => {
        resolve({
          data: res.data,
          page: res.meta.page - 1,
          totalCount: res.meta.total_count,
        })
      })
      .catch(() => {
        // Hack to to get loading material-table spinner to hide...
        resolve({ data: [] })
      })
  })
}
