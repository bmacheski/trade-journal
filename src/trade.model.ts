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
  buy: boolean
  notes: string

  constructor(trade: any = {}) {
    this.id = trade.id || null
    this.pair = trade.pair || ''
    this.quantity = trade.quantity || null
    this.entryPrice = trade.entryPrice || ''
    this.exitPrice = trade.exitPrice || ''
    this.entryDate = trade.entryDate || ''
    this.exitDate = trade.exitDate || ''
    this.buy = trade.buy || null
    this.notes = trade.notes || ''
  }

  deserialize(input: any) {
    Object.assign(this, input)
    return this
  }
}
