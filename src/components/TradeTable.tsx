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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: `0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)`,
    padding: `16px 32px 24px`,
  },
})

function TradeTable() {
  const classes = useStyles()

  const tradesRef = useFirestore().collection('trades')
  const trades = useFirestoreCollectionData(tradesRef, { idField: 'id' })

  async function onDeleteClick(id: string) {
    await tradesRef.doc(id).delete()
  }

  return (
    <TableContainer component={Paper} style={{ marginTop: '10px' }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pair</TableCell>
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
                {trade.quantity}
              </TableCell>
              <TableCell component="th" scope="row">
                {trade.entryDate}
              </TableCell>
              <TableCell component="th" scope="row">
                {trade.exitDate}
              </TableCell>
              <TableCell component="th" scope="row">
                {trade.entryPrice}
              </TableCell>
              <TableCell component="th" scope="row">
                {trade.exitPrice}
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

export default TradeTable
