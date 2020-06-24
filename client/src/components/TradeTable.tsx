import {
  Chip,
  lighten,
  makeStyles,
  Theme,
  createStyles,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core'
import React from 'react'
import * as dateFormatter from '../utils/date'
import * as dollarFormatter from '../utils/dollar'
import HighlightOffIcon from '@material-ui/icons/HighlightOffOutlined'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import TradeTableToolbar from './TradeTableToolbar'
import get from 'lodash/get'
import Pagination from '@material-ui/lab/Pagination'
import noop from 'lodash/noop'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    table: {
      minWidth: 650,
    },
    container: {
      marginTop: '10px',
    },
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
    },
    hightlight: {
      color: theme.palette.secondary.main,
      backgroundColor: lighten(theme.palette.secondary.light, 0.85),
    },
    clickable: {
      cursor: 'pointer',
    },
    sortArrow: {
      verticalAlign: 'middle',
    },
    sellBadge: {
      backgroundColor: '#f83245',
      color: '#fff',
    },
    buyBadge: {
      backgroundColor: '#1bc943',
      color: '#fff',
    },
  })
})

interface TradeTableProps {
  trades: any[]
  onDeleteSuccess?: () => void
  onEditClick: (id) => void
  onRowClick?: (id) => void
  title: string
  isDetailView?: boolean
  showFilter?: boolean
  pageCount?: number
  countPerPage?: number
  currPage?: number
  handlePageChange?: (page: number) => void
  selectedFilters?: any[]
  onToolbarItemSelect?: (a, b) => void
  orderBy?: string | null
  sortDirection?: 'asc' | 'desc'
  onSortClick?: (val) => void
  onChipClick?: (index: number) => void
}

function TradeTable({
  trades,
  onEditClick,
  onRowClick,
  title,
  isDetailView = false,
  showFilter,
  pageCount,
  currPage,
  handlePageChange = noop,
  selectedFilters = [],
  onToolbarItemSelect = noop,
  orderBy,
  sortDirection,
  onSortClick = noop,
  onChipClick = noop,
}: TradeTableProps) {
  const classes = useStyles()
  const columns = [
    {
      field: 'name',
      title: 'Pair',
      sort: true,
      render: (row) => <>{row.pair?.name}</>,
    },
    {
      title: 'Status',
      field: 'status',
      sort: false,
      render: (row) => {
        const isOpen = !row.exit_date
        return (
          <Chip
            size="small"
            label={isOpen ? 'Open' : 'Closed'}
            className={isOpen ? classes.buyBadge : classes.sellBadge}
          />
        )
      },
    },
    {
      field: 'is_win',
      title: 'Win',
      sort: false,
      render: (row) =>
        row.exit_date ? (
          row.is_win ? (
            <CheckCircleIcon style={{ color: '#1bc943' }} />
          ) : (
            <HighlightOffIcon style={{ color: '#f83245' }} />
          )
        ) : null,
    },
    {
      title: 'Side',
      field: 'action',
      sort: false,
      render: (row) => {
        const isBuy = row.action === 'buy'
        return (
          <Chip
            size="small"
            label={isBuy ? 'Long' : 'Short'}
            className={isBuy ? classes.buyBadge : classes.sellBadge}
          />
        )
      },
    },
    {
      field: 'quantity',
      title: 'Quantity',
      sort: false,
    },
    {
      title: 'Entry Date',
      field: 'exit_price',
      sort: false,
      render: (row) => dateFormatter.toShortDate(row.entry_date),
    },
    {
      title: 'Exit Date',
      field: 'exit_date',
      sort: false,
      render: (row) => dateFormatter.toShortDate(row.exit_date),
    },
    {
      title: 'Entry Price',
      field: 'entry_price',
      sort: false,
      render: (row) => dollarFormatter.format(row.entry_price),
    },
    {
      title: 'Exit Price',
      field: 'exit_price',
      sort: false,
      render: (row) => dollarFormatter.format(row.exit_price),
    },
    {
      title: 'RRR Planned',
      field: 'risk_reward_ratio',
      sort: false,
      render: (row) => Number(row.risk_reward_ratio).toFixed(2),
    },
    {
      title: 'R-Multiple',
      field: 'risk_multiple',
      sort: false,
      render: (row) => Number(row.risk_multiple).toFixed(1),
    },
    {
      field: 'take_profit',
      title: 'Take Profit',
      sort: false,
    },
    {
      field: 'original_take_profit_hit',
      title: 'TP Hit',
      sort: false,
      render: (row) =>
        row.exit_date ? (
          row.original_take_profit_hit ? (
            <CheckCircleIcon style={{ color: '#1bc943' }} />
          ) : (
            <HighlightOffIcon style={{ color: '#f83245' }} />
          )
        ) : null,
    },
    {
      field: 'stop_loss',
      title: 'Stop Loss',
      sort: false,
    },
    {
      field: 'fees',
      title: 'Fees',
      sort: false,
    },
  ]

  if (!trades) return null

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        {showFilter && (
          <TradeTableToolbar
            onItemSelect={onToolbarItemSelect}
            selectedFilters={selectedFilters}
            onChipClick={onChipClick}
          />
        )}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map((c) => (
                <TableCell>
                  <TableSortLabel
                    disabled={!c.sort}
                    active={orderBy === c.field}
                    direction={sortDirection}
                    onClick={() => onSortClick(c.field)}
                  >
                    {c.title}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {trades.map((currTrade) => {
              return (
                <TableRow
                  style={{ cursor: 'pointer' }}
                  onClick={() => onRowClick && onRowClick(currTrade.id)}
                >
                  {columns.map((currColumn) => {
                    return (
                      <TableCell>
                        {currColumn.render
                          ? currColumn.render(currTrade)
                          : get(currTrade, currColumn.field)}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        style={{ padding: 10 }}
        count={pageCount}
        page={currPage}
        onChange={(_, page) => handlePageChange(page)}
      />
    </div>
  )
}

export default TradeTable
