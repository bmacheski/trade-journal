import {
  Chip,
  lighten,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import React from 'react'
import * as dateFormatter from '../utils/date'
import * as dollarFormatter from '../utils/dollar'
import MaterialTable from 'material-table'
import HighlightOffIcon from '@material-ui/icons/HighlightOffOutlined'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import TradeTableToolbar from './TradeTableToolbar'

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
  trades: any
  onDeleteSuccess?: () => void
  onEditClick: (id) => void
  onRowClick?: (a, b) => void
  title: string
  isDetailView?: boolean
  hideFilter?: boolean
}

function TradeTable({
  trades,
  onEditClick,
  onRowClick,
  title,
  isDetailView = false,
  hideFilter,
}: TradeTableProps) {
  const classes = useStyles()
  const columns = [
    {
      field: 'pair.name',
      title: 'Pair',
    },
    {
      title: 'Status',
      field: 'status',
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
    },
    {
      title: 'Entry Date',
      field: 'exit_price',
      render: (row) => dateFormatter.toShortDate(row.entry_date),
    },
    {
      title: 'Exit Date',
      field: 'exit_date',
      render: (row) => dateFormatter.toShortDate(row.exit_date),
    },
    {
      title: 'Entry Price',
      field: 'entry_price',
      render: (row) => dollarFormatter.format(row.entry_price),
    },
    {
      title: 'Exit Price',
      field: 'exit_price',
      render: (row) => dollarFormatter.format(row.exit_price),
    },
    {
      title: 'RRR Planned',
      field: 'risk_reward_ratio',
      render: (row) => Number(row.risk_reward_ratio).toFixed(2),
    },
    {
      title: 'R-Multiple',
      field: 'risk_multiple',
      render: (row) => Number(row.risk_multiple).toFixed(1),
    },
    {
      field: 'take_profit',
      title: 'Take Profit',
    },
    {
      field: 'original_take_profit_hit',
      title: 'TP Hit',
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
    },
    {
      field: 'fees',
      title: 'Fees',
    },
  ]

  if (!trades) return null

  return (
    <div className={classes.root}>
      <MaterialTable
        columns={columns}
        components={{
          Toolbar: (props) => (
            <TradeTableToolbar hideFilter={hideFilter || false} {...props} />
          ),
        }}
        data={trades}
        title={title}
        onRowClick={onRowClick}
        options={{
          actionsColumnIndex: -1,
          search: false,
          maxBodyHeight: isDetailView ? 200 : 1000,
          emptyRowsWhenPaging: !isDetailView,
        }}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit trade',
            onClick: (_, rowData) => onEditClick(rowData.id),
          },
          {
            icon: 'delete',
            tooltip: 'Delete Trade',
            onClick: (_, rowData) => onEditClick(rowData.id),
          },
        ]}
      />
    </div>
  )
}

export default TradeTable
