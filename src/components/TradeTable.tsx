import { useMutation } from '@apollo/react-hooks'
import { Chip, IconButton, TablePagination } from '@material-ui/core'
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
import { ArrowDropDown, ArrowDropUp, Create, Delete } from '@material-ui/icons'
import get from 'lodash/get'
import noop from 'lodash/noop'
import React from 'react'
import { Link } from 'react-router-dom'

import { GET_TRADES, REMOVE_TRADE } from '../graphql/queries/trades.query'
import usePrevious from '../hooks/usePrevious'
import * as dateFormatter from '../utils/date'
import * as dollarFormatter from '../utils/dollar'

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

type SortDirection = 'asc' | 'desc'

interface TradeTableProps {
  trades: any[]
  showPagination?: boolean
  totalCount?: number
  onRefresh?: (sort) => void
  onRowClick?: (tradeId: string) => void
  onDeleteSuccess?: () => void
}

function TradeTable({
  trades,
  totalCount,
  showPagination = true,
  onRefresh,
  onRowClick,
  onDeleteSuccess = noop,
}: TradeTableProps) {
  const classes = useStyles()

  const [deleteTrade, { loading: deleting }] = useMutation(REMOVE_TRADE)
  const [sort, setSort] = React.useState<{
    direction: SortDirection
    column: string
    page: number
    skip: number
  }>({
    direction: 'asc',
    column: 'id',
    page: 0,
    skip: 0,
  })
  const previousSort = usePrevious(sort)

  const tableConfigData = [
    {
      header: 'Pair',
      key: 'symbol.name',
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
    if (deleting) return
    try {
      await deleteTrade({
        variables: { id },
        refetchQueries: [{ query: GET_TRADES }],
      })
      onDeleteSuccess()
    } catch {}
  }

  function onSortClick(column) {
    setSort((prev) => {
      return {
        direction:
          prev.column === column && prev?.direction === 'asc' ? 'desc' : 'asc',
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

  React.useEffect(() => {
    if (previousSort && sort && onRefresh) {
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
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer component={Paper} className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableConfigData.map((col) => (
                  <TableCell
                    variant="head"
                    sortDirection={sort.direction}
                    onClick={() => {
                      if (col.headerDisabled) return
                      onSortClick(col.key)
                    }}
                    className={classes.clickable}
                  >
                    {sort.column === col.key ? (
                      sort.direction === 'asc' ? (
                        <ArrowDropDown className={classes.sortArrow} />
                      ) : (
                        <ArrowDropUp className={classes.sortArrow} />
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
                <TableRow
                  hover
                  className={classes.clickable}
                  key={`${trade.id}-row`}
                  onClick={onRowClick ? onRowClick.bind(null, trade.id) : noop}
                >
                  {tableConfigData.map((val) => {
                    return (
                      <TableCell component="th" scope="row">
                        {val.render ? val.render(trade) : get(trade, val.key)}
                      </TableCell>
                    )
                  })}
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
      </Paper>
    </div>
  )
}

export default TradeTable
