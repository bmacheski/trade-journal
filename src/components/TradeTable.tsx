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
import { Chip } from '@material-ui/core'
import unionBy from 'lodash/unionBy'

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
    key: string
    render?: (trade) => void
    order: number
  }[]
  trades: any[]
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

function TradeTable({ data = [], trades }: TradeTableProps) {
  const classes = useStyles()
  const mergedData = unionBy(data, defaultData, 'key').sort(
    (a, b) => a.order - b.order,
  )

  if (!trades) return null

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {mergedData.map((col) => (
              <TableCell>{col.header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade) => (
            <TableRow>
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
  )
}

export default TradeTable
