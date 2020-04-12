import React from 'react'
import { useFirestore, useFirestoreDocData } from 'reactfire'
import { Link, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import * as dollarFormatter from '../utils/dollar'
import { Trade } from '../trade.model'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    marginTop: '10px',
  },
})

function TradeDetailTable() {
  const classes = useStyles()

  const { id } = useParams()

  const tradesRef = useFirestore().collection('trades').doc(id)
  const trade: Trade = useFirestoreDocData(tradesRef, { idField: 'id' })

  return (
    <div>
      <h1>Trade Detail</h1>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pair</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Entry Date</TableCell>
              <TableCell>Exit Date</TableCell>
              <TableCell>Entry Price</TableCell>
              <TableCell>Exit Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <Link to={`/trades/${trade.id}`}> {trade.pair}</Link>
              </TableCell>
              <TableCell component="th" scope="row">
                {trade.quantity}
              </TableCell>
              <TableCell component="th" scope="row">
                {trade.entryDate}
              </TableCell>
              <TableCell component="th" scope="row">
                {trade.exitDate}
              </TableCell>
              <TableCell component="th" scope="row">
                {dollarFormatter.format(trade.entryPrice)}
              </TableCell>
              <TableCell component="th" scope="row">
                {dollarFormatter.format(trade.exitPrice)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TradeDetailTable
