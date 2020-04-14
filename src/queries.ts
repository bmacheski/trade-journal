import gql from 'graphql-tag'

const GET_TRADES = gql`
  query getTrade($id: Int) {
    trades(where: { id: { _eq: $id } }) {
      id
      action
      entry_date
      entry_price
      exit_date
      exit_price
      pair
      quantity
    }
  }
`

const UPDATE_TRADE = gql`
  mutation updateTrade($id: Int, $changes: trades_set_input) {
    update_trades(where: { id: { _eq: $id } }, _set: $changes) {
      affected_rows
      returning {
        id
      }
    }
  }
`

const CREATE_TRADE = gql`
  mutation createTrade($trade: trades_insert_input!) {
    insert_trades(objects: [$trade]) {
      returning {
        id
      }
    }
  }
`
const REMOVE_TRADE = gql`
  mutation deleteTrade($id: Int) {
    delete_trades(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export { GET_TRADES, UPDATE_TRADE, CREATE_TRADE, REMOVE_TRADE }
