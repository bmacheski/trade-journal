import { Moment } from 'moment'

interface Deserializable {
  deserialize(input: any): this
}

export class Trade implements Deserializable {
  id: string | null
  pair: string
  quantity: number
  exit_price: number
  entry_price: number
  entry_date: Moment | string
  exit_date: Moment | string
  action: 'buy' | 'sell' | null
  notes: string
  image_url: string

  constructor(trade: any = {}) {
    this.id = trade.id || null
    this.pair = trade.pair || ''
    this.quantity = trade.quantity || null
    this.entry_price = trade.entryPrice || ''
    this.exit_price = trade.exitPrice || ''
    this.entry_date = trade.entryDate || ''
    this.exit_date = trade.exitDate || ''
    this.action = trade.action || ''
    this.notes = trade.notes || ''
    this.image_url = trade.imageUrl || ''
  }

  deserialize(input: any) {
    Object.assign(this, input)
    return this
  }
}
