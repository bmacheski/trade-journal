import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import * as dollarFormatter from '../utils/dollar'
import * as dateFormatter from '../utils/date'
import { Chip, TablePagination } from '@material-ui/core'
import unionBy from 'lodash/unionBy'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import usePrevious from '../hooks/usePrevious'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    marginTop: '10px',
  },
})

interface TradeTableProps {
  data?: {
    header: string
    headerDisabled?: boolean
    key: string
    render?: (trade) => void
    order: number
  }[]
  trades: any[]
  showPagination?: boolean
  totalCount?: number
  onRefresh?: (sort) => void
}

const defaultData = [
  { header: 'Pair', key: 'pair', order: 1 },
  {
    header: 'Long / Short',
    key: 'action',
    order: 2,
    render: (trade) => (
      <Chip label={trade.action === 'buy' ? 'Long' : 'Short'} />
    ),
  },
  { header: 'Quantity', key: 'quantity', order: 3 },
  {
    header: 'Entry Date',
    key: 'entry_date',
    order: 4,
    render: (trade) => dateFormatter.toUserFriendlyFullDate(trade.entry_date),
  },
  {
    header: 'Exit Date',
    key: 'exit_date',
    order: 5,
    render: (trade) => dateFormatter.toUserFriendlyFullDate(trade.exit_date),
  },
  {
    header: 'Entry Price',
    key: 'entry_price',
    order: 6,
    render: (trade) => dollarFormatter.format(trade.entry_price),
  },
  {
    header: 'Exit Price',
    key: 'exit_price',
    order: 7,
    render: (trade) => dollarFormatter.format(trade.exit_price),
  },
]

function TradeTable({
  data = [],
  trades,
  totalCount,
  showPagination = true,
  onRefresh,
}: TradeTableProps) {
  const classes = useStyles()
  const mergedData = unionBy(data, defaultData, 'key').sort(
    (a, b) => a.order - b.order,
  )

  const [sort, setSort] = React.useState<{
    direction: 'asc' | 'desc'
    column: string
    page: number
    skip: number
  }>({
    direction: 'asc',
    column: 'id',
    page: 0,
    skip: 0,
  })

  function onSortClick(column) {
    setSort((prev) => {
      return {
        direction:
          prev.column == column && prev?.direction == 'asc' ? 'desc' : 'asc',
        column,
        page: 0,
        skip: prev.skip,
      }
    })
  }

  function onPageChange(_, page) {
    setSort((prev) => {
      return {
        direction: prev.direction,
        column: prev.column,
        page,
        skip: page * 10,
      }
    })
  }

  const previousSortState = usePrevious(sort)
  React.useEffect(() => {
    if (previousSortState && sort && onRefresh) {
      onRefresh({
        skip: sort.skip,
        order: {
          [sort.column]: sort.direction,
        },
      })
    }
  }, [sort, onRefresh])

  if (!trades) return null

  return (
    <div>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {mergedData.map((col) => (
                <TableCell
                  onClick={() => {
                    if (col.headerDisabled) return
                    onSortClick(col.key)
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {sort.column === col.key ? (
                    sort.direction === 'asc' ? (
                      <ArrowDropDown style={{ verticalAlign: 'middle' }} />
                    ) : (
                      <ArrowDropUp style={{ verticalAlign: 'middle' }} />
                    )
                  ) : (
                    <></>
                  )}
                  {col.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {trades.map((trade) => (
              <TableRow key={trade.id}>
                {mergedData.map((val) => (
                  <TableCell component="th" scope="row">
                    {val.render ? val.render(trade) : trade[val.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showPagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalCount || 1}
          rowsPerPage={10}
          page={sort.page}
          onChangePage={onPageChange}
          onChangeRowsPerPage={() => ({})}
        />
      )}
    </div>
  )
}

export default TradeTable
