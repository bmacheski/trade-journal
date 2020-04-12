import React from 'react'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Create, Delete } from '@material-ui/icons'
import Chip from '@material-ui/core/Chip'
import * as dollarFormatter from '../utils/dollar'
import * as dateFormatter from '../utils/date'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function TradeListTable() {
  const tradesRef = useFirestore().collection('trades')
  const trades = useFirestoreCollectionData(tradesRef, { idField: 'id' })

  const classes = useStyles()

  async function onDeleteClick(id: string) {
    await tradesRef.doc(id).delete()
  }

  return (
    <TableContainer component={Paper} style={{ marginTop: '10px' }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pair</TableCell>
            <TableCell>Long / Short</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Entry Date</TableCell>
            <TableCell>Exit Date</TableCell>
            <TableCell>Entry Price</TableCell>
            <TableCell>Exit Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade: any) => (
            <TableRow key={trade.id}>
              <TableCell component="th" scope="row">
                <Link to={`/trades/${trade.id}`}> {trade.pair}</Link>
              </TableCell>
              <TableCell component="th" scope="row">
                <Chip label={trade.action === 'buy' ? 'Long' : 'Short'} />
              </TableCell>
              <TableCell component="th" scope="row">
                {trade.quantity}
              </TableCell>
              <TableCell component="th" scope="row">
                {dateFormatter.toUserFriendlyFullDate(trade.entryDate)}
              </TableCell>
              <TableCell component="th" scope="row">
                {dateFormatter.toUserFriendlyFullDate(trade.exitDate)}
              </TableCell>
              <TableCell component="th" scope="row">
                {dollarFormatter.format(trade.entryPrice)}
              </TableCell>
              <TableCell component="th" scope="row">
                {dollarFormatter.format(trade.exitPrice)}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to={`/trades/${trade.id}/edit`}>
                  <Create></Create>
                </Link>
                <Delete onClick={() => onDeleteClick(trade.id)}></Delete>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TradeListTable
