import { Moment } from 'moment'

interface Deserializable {
  deserialize(input: any): this
}

export class Trade implements Deserializable {
  id: string | null
  pair: string
  quantity: number
  exitPrice: number
  entryPrice: number
  entryDate: Moment | string
  exitDate: Moment | string
  action: 'buy' | 'sell' | null
  notes: string
  imageUrl: string

  constructor(trade: any = {}) {
    this.id = trade.id || null
    this.pair = trade.pair || ''
    this.quantity = trade.quantity || null
    this.entryPrice = trade.entryPrice || ''
    this.exitPrice = trade.exitPrice || ''
    this.entryDate = trade.entryDate || ''
    this.exitDate = trade.exitDate || ''
    this.action = trade.action || ''
    this.notes = trade.notes || ''
    this.imageUrl = trade.imageUrl || ''
  }

  deserialize(input: any) {
    Object.assign(this, input)
    return this
  }
}
