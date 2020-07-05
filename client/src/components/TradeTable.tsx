import {
  Chip,
  makeStyles,
  Theme,
  createStyles,
  IconButton,
} from '@material-ui/core'
import React from 'react'
import * as dateFormatter from '../utils/date'
import * as dollarFormatter from '../utils/dollar'
import HighlightOffIcon from '@material-ui/icons/HighlightOffOutlined'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import TradeTableToolbar from './TradeTableToolbar'
import noop from 'lodash/noop'
import Table from './Table'
import { SortDirection, Trade } from '../types'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Router from 'next/router'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: '100%',
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
  trades: Trade[]
  onDeleteSuccess?: () => void
  title: string
  showFilter?: boolean
  pageCount?: number
  countPerPage?: number
  currPage?: number
  handlePageChange?: (page: number) => void
  selectedFilters?: any[]
  onToolbarItemSelect?: (a, b) => void
  orderBy?: string | null
  sortDirection?: SortDirection
  onSortClick?: (val) => void
  onChipClick?: (index: number) => void
  hideActions?: boolean
}

function TradeTable({
  trades,
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
  hideActions,
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

  const actions = [
    {
      icon: EditIcon,
      onClick: (trade) => Router.push(`/trades/${trade.id}/edit`),
    },
    {
      icon: DeleteIcon,
      onClick: (trade) => console.log('deleting trade', trade),
    },
  ]

  return (
    <div className={classes.root}>
      <Table
        columns={columns}
        actions={actions}
        items={trades}
        pageCount={pageCount || 0}
        currPage={currPage || 0}
        sortDirection={sortDirection}
        handlePageChange={handlePageChange}
        onSortClick={onSortClick}
        onRowClick={(trade) => Router.push(`/trades/${trade.id}`)}
        renderToolbar={() =>
          showFilter ? (
            <TradeTableToolbar
              onItemSelect={onToolbarItemSelect}
              selectedFilters={selectedFilters}
              onChipClick={onChipClick}
            />
          ) : (
            <></>
          )
        }
      />
    </div>
  )
}

export default TradeTable
