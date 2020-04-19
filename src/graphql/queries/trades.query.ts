import gql from 'graphql-tag'

const GET_TRADES = gql`
  query getTrade($id: Int, $skip: Int, $order: [trade_order_by!]) {
    trade(
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
      fees
      image_url
      notes
      quantity
      risk_reward
      stop_loss
      symbol {
        id
        name
      }
      target
      take_profit
    }
    trade_aggregate {
      aggregate {
        count
      }
    }
  }
`

const UPDATE_TRADE = gql`
  mutation updateTrade($id: Int, $changes: trade_set_input) {
    update_trade(where: { id: { _eq: $id } }, _set: $changes) {
      affected_rows
      returning {
        id
      }
    }
  }
`

const CREATE_TRADE = gql`
  mutation createTrade($trade: trades_insert_input!) {
    insert_trade(objects: [$trade]) {
      returning {
        id
      }
    }
  }
`
const REMOVE_TRADE = gql`
  mutation deleteTrade($id: Int) {
    delete_trade(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`

const GET_METRICS = gql`
  query {
    trade_metric {
      longs
      shorts
      return
      total_trades
      wins
    }
  }
`

export { GET_TRADES, UPDATE_TRADE, CREATE_TRADE, REMOVE_TRADE, GET_METRICS }
