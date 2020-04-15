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
import { Chip, TablePagination, IconButton } from '@material-ui/core'
import { Create, Delete } from '@material-ui/icons'
import usePrevious from '../hooks/usePrevious'
import noop from 'lodash/noop'
import { createStyles, lighten, Theme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { GET_TRADES, REMOVE_TRADE } from '../graphql/queries/trades.query'
import { useMutation } from '@apollo/react-hooks'

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
  })
})

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

  async function onDeleteClick(
    evt: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: string,
  ) {
    evt.stopPropagation()
    if (deleting) return
    await deleteTrade({
      variables: { id },
      refetchQueries: [{ query: GET_TRADES }],
    })
    onDeleteSuccess()
  }

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

  const tableConfigData = [
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
    {
      header: 'Actions',
      headerDisabled: true,
      key: 'actions',
      order: 8,
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
                    style={{ cursor: 'pointer' }}
                  >
                    {/* {sort.column === col.key ? (
                      sort.direction === 'asc' ? (
                        <ArrowDropDown style={{ verticalAlign: 'middle' }} />
                      ) : (
                        <ArrowDropUp style={{ verticalAlign: 'middle' }} />
                      )
                    ) : (
                      <></>
                    )} */}
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
                  key={trade.id}
                  onClick={onRowClick ? onRowClick.bind(null, trade.id) : noop}
                >
                  {tableConfigData.map((val) => (
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
      </Paper>
    </div>
  )
}

export default TradeTable
