import { Chip } from '@material-ui/core'
import {
  createStyles,
  lighten,
  makeStyles,
  Theme,
} from '@material-ui/core/styles'
import React from 'react'
import * as dateFormatter from '../utils/date'
import * as dollarFormatter from '../utils/dollar'
import MaterialTable from 'material-table'

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
      marginTop: theme.spacing(2),
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
}

function TradeTable({ trades, onEditClick, onRowClick }: TradeTableProps) {
  const classes = useStyles()

  const columns = [
    {
      field: 'pair.name',
      title: 'Pair',
    },
    {
      title: 'Side',
      field: 'action',
      render: (row) => {
        const isBuy = row.action === 'buy'
        return (
          <Chip
            label={isBuy ? 'Long' : 'Short'}
            className={isBuy ? classes.buyBadge : classes.sellBadge}
          />
        )
      },
    },
    {
      title: 'Status',
      render: (row) => {
        const isOpen = !row.exit_date
        return (
          <Chip
            label={isOpen ? 'Open' : 'Closed'}
            className={isOpen ? classes.buyBadge : classes.sellBadge}
          />
        )
      },
    },
    {
      field: 'quantity',
      title: 'Quantity',
    },
    {
      field: 'entry_date',
      title: 'Entry Date',
      render: (val) => dateFormatter.toShortDate(val.entry_date),
    },
    {
      field: 'exit_date',
      title: 'Exit Date',
      render: (val) => dateFormatter.toShortDate(val.exit_date),
    },
    {
      field: 'entry_price',
      title: 'Entry price',
      render: (val) => dollarFormatter.format(val.entry_price),
    },
    {
      field: 'exit_price',
      title: 'Exit price',
      render: (val) => dollarFormatter.format(val.exit_price),
    },
    {
      field: 'risk_reward_ratio',
      title: 'RRR Planned',
      render: (val) => Number(val.risk_reward_ratio).toFixed(2),
    },
    {
      field: 'risk_multiple',
      title: 'R-Multiple',
      render: (val) => Number(val.risk_multiple).toFixed(1),
    },
  ]

  if (!trades) return null

  return (
    <div className={classes.root}>
      <MaterialTable
        columns={columns}
        data={trades}
        title="Trades"
        onRowClick={onRowClick}
        options={{
          actionsColumnIndex: -1,
          search: false,
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
