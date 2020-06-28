import {
  makeStyles,
  createStyles,
  TableContainer,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Table as MaterialUITable,
} from '@material-ui/core'
import React from 'react'
import get from 'lodash/get'
import Pagination from '@material-ui/lab/Pagination'
import noop from 'lodash/noop'
import { SortDirection, Trade } from '../types'

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      width: '100%',
    },
    paginationRow: {
      padding: 10,
    },
    tableRow: {
      cursor: 'pointer',
    },
  })
})

interface TableProps<T> {
  columns: {
    render?: (val: T) => JSX.Element | null | string
    sort?: any
    field: string
    title: string
  }[]
  items: T[]
  onRowClick?: (val: T) => void
  pageCount?: number
  currPage?: number
  handlePageChange?: Function
  orderBy?: string
  onSortClick?: (c: string) => void
  sortDirection?: SortDirection
  renderToolbar?: () => JSX.Element | void
}

function Table<T>({
  columns,
  items,
  onRowClick = noop,
  pageCount = 0,
  currPage = 0,
  handlePageChange = noop,
  onSortClick = noop,
  sortDirection,
  orderBy,
  renderToolbar = noop,
}: TableProps<T>) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        {renderToolbar()}
        <MaterialUITable>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell>
                  <TableSortLabel
                    disabled={!col.sort}
                    active={orderBy === col.field}
                    direction={sortDirection}
                    onClick={() => onSortClick(col.field)}
                  >
                    {col.title}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((currItem) => {
              return (
                <TableRow
                  className={classes.tableRow}
                  onClick={() => onRowClick && onRowClick(currItem)}
                >
                  {columns.map((currColumn) => {
                    return (
                      <TableCell>
                        {currColumn.render
                          ? currColumn.render(currItem)
                          : get(currItem, currColumn.field)}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </MaterialUITable>
      </TableContainer>
      <Pagination
        className={classes.paginationRow}
        count={pageCount}
        page={currPage}
        onChange={(_, page) => handlePageChange(page)}
      />
    </div>
  )
}

export default Table
