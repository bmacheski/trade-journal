import {
  makeStyles,
  Theme,
  createStyles,
  TableContainer,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Table as MaterialTable,
} from '@material-ui/core'
import React from 'react'
import get from 'lodash/get'
import Pagination from '@material-ui/lab/Pagination'
import noop from 'lodash/noop'

const useStyles = makeStyles(() => {
  return createStyles({
    table: {
      minWidth: 650,
    },
    root: {
      width: '100%',
    },
  })
})

interface TableProps {
  columns: any[]
  items: any[]
  onRowClick?: Function
  pageCount: number
  currPage: number
  handlePageChange?: Function
  showFilter?: boolean
  orderBy?: string
  onSortClick?: (c: string) => void
  sortDirection?: 'asc' | 'desc'
  renderToolbar?: () => JSX.Element | void
}

function Table({
  columns,
  items,
  onRowClick = noop,
  pageCount = 0,
  currPage = 0,
  handlePageChange = noop,
  showFilter = false,
  onSortClick = noop,
  sortDirection,
  orderBy,
  renderToolbar = noop,
}: TableProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        {renderToolbar()}
        <MaterialTable className={classes.table}>
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
            {items.map((currItem) => {
              return (
                <TableRow
                  style={{ cursor: 'pointer' }}
                  onClick={() => onRowClick && onRowClick(currItem.id)}
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
        </MaterialTable>
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

export default Table
