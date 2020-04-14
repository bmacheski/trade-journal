import gql from 'graphql-tag'

const GET_TRADES = gql`
  query getTrades($id: Int, $skip: Int, $order: [trades_order_by!]) {
    trades(
      limit: 10
      offset: $skip
      where: { id: { _eq: $id } }
      order_by: $order
    ) {
      id
      action
      entry_date
      entry_price
      exit_date
      exit_price
      pair
      quantity
      notes
    }
    trades_aggregate {
      aggregate {
        count
      }
    }
  }
`

const UPDATE_TRADE = gql`
  mutation updateTrades($id: Int, $changes: trades_set_input) {
    update_trades(where: { id: { _eq: $id } }, _set: $changes) {
      affected_rows
      returning {
        id
      }
    }
  }
`

const CREATE_TRADE = gql`
  mutation createTrades($trade: trades_insert_input!) {
    insert_trades(objects: [$trade]) {
      returning {
        id
      }
    }
  }
`
const REMOVE_TRADE = gql`
  mutation deleteTrades($id: Int) {
    delete_trades(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export { GET_TRADES, UPDATE_TRADE, CREATE_TRADE, REMOVE_TRADE }
