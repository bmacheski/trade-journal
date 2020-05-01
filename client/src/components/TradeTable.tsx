import {
  Chip,
  IconButton,
  TablePagination,
  TableSortLabel,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import {
  createStyles,
  lighten,
  makeStyles,
  Theme,
} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Create, Delete } from '@material-ui/icons'
import get from 'lodash/get'
import noop from 'lodash/noop'
import React, { Dispatch } from 'react'
import { Link } from 'react-router-dom'
import usePrevious from '../hooks/usePrevious'
import * as dateFormatter from '../utils/date'
import * as dollarFormatter from '../utils/dollar'
import { deleteTrade } from '../api/trades'
import CircularProgress from '@material-ui/core/CircularProgress'

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
  loading: boolean
  trades: any[]
  showPagination?: boolean
  totalCount?: number
  onRowClick?: (tradeId: string) => void
  onDeleteSuccess?: () => void
  dispatch?: Dispatch<any>
  sort?: string
  sortDirection?: 'asc' | 'desc' | null
  page?: number | null
}

function TradeTable({
  trades,
  totalCount,
  showPagination = true,
  onRowClick,
  onDeleteSuccess = noop,
  loading,
  dispatch = noop,
  sort = '',
  sortDirection = null,
  page = null,
}: TradeTableProps) {
  const classes = useStyles()

  const tableConfig = [
    {
      header: 'Pair',
      key: 'pair.name',
    },
    {
      header: 'Long / Short',
      key: 'action',
      render: (trade) => {
        const isBuy = trade.action === 'buy'
        return (
          <Chip
            label={isBuy ? 'Long' : 'Short'}
            className={isBuy ? classes.buyBadge : classes.sellBadge}
          />
        )
      },
    },
    { header: 'Quantity', key: 'quantity' },
    {
      header: 'Entry Date',
      key: 'entry_date',
      render: (trade) => dateFormatter.toUserFriendlyFullDate(trade.entry_date),
    },
    {
      header: 'Exit Date',
      key: 'exit_date',
      render: (trade) => dateFormatter.toUserFriendlyFullDate(trade.exit_date),
    },
    {
      header: 'Entry Price',
      key: 'entry_price',
      render: (trade) => dollarFormatter.format(trade.entry_price),
    },
    {
      header: 'Exit Price',
      key: 'exit_price',
      render: (trade) => dollarFormatter.format(trade.exit_price),
    },
    {
      header: 'Actions',
      headerDisabled: true,
      key: 'actions',
      render: (trade) => {
        return (
          <>
            <Link to={`/trades/${trade.id}/edit`}>
              <IconButton>
                <Create />
              </IconButton>
            </Link>
            <IconButton>
              <Delete onClick={(e) => onDeleteClick(e, trade.id)} />
            </IconButton>
          </>
        )
      },
    },
  ]

  async function onDeleteClick(
    evt: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: string,
  ) {
    evt.stopPropagation()

    try {
      await deleteTrade(id)
      onDeleteSuccess()
    } catch (err) {}
  }

  function onSortClick(column) {
    dispatch({
      type: 'CHANGE_SORT',
      sort: column,
    })
  }

  function onPageChange(_, page) {
    dispatch({
      type: 'CHANGE_PAGE',
      page: page,
    })
  }

  function renderTable() {
    if (loading) return <CircularProgress />
    if (!trades.length) return <div>No results found.</div>

    return (
      <>
        {trades.map((trade) => (
          <TableRow
            hover
            className={classes.clickable}
            key={`${trade.id}-row`}
            onClick={onRowClick ? onRowClick.bind(null, trade.id) : noop}
          >
            {tableConfig.map((val) => {
              return (
                <TableCell component="th" scope="row">
                  {val.render ? val.render(trade) : get(trade, val.key)}
                </TableCell>
              )
            })}
          </TableRow>
        ))}
      </>
    )
  }

  if (!trades) return null

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer component={Paper} className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableConfig.map((col) => (
                  <TableCell
                    variant="head"
                    sortDirection={sortDirection || undefined}
                    onClick={() => {
                      if (col.headerDisabled) return
                      onSortClick(col.key)
                    }}
                    className={classes.clickable}
                  >
                    <TableSortLabel
                      active={sort === col.key}
                      direction={sortDirection || undefined}
                    >
                      {col.header}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{renderTable()}</TableBody>
          </Table>
        </TableContainer>
        {showPagination && (
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={totalCount || 1}
            rowsPerPage={10}
            page={page || 0}
            onChangePage={onPageChange}
          />
        )}
      </Paper>
    </div>
  )
}

export default TradeTable
