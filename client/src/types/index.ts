export interface Filter {
  name: string
  value: string
}

export interface Trade {
  id: number
  action: string
  pair: Pair
  quantity: string
  entry_date: Date
  exit_date: Date
  entry_price: string
  exit_price: string
  notes: null
  image_url: string
  trade_setups: TradeSetup[]
  stop_loss: number | null
  take_profit: number | null
  fees: null
  risk_reward_ratio: number | null
  risk_multiple: number | null
  original_take_profit_hit: boolean
  is_win: boolean
  platform: Pair
  trade_tags: any[]
}
export interface Pair {
  id: number
  name: string
  created_at: Date
  updated_at: Date
}

export interface TradeSetup {
  id: number
  name: string
  setup_id: number
}

export interface Metrics {
  long_count: number
  long_win_count: number
  short_count: number
  short_win_count: number
  risk_reward_ratio_avg: number
  risk_multiple_avg: number
  win_count: number
  loss_count: number
  total_count: number
}

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}
