import moment, { Moment } from 'moment'

export function toUserFriendlyFullDate(date) {
  return moment(date).format('LLL')
}

export function toDateTime(date: string | Moment) {
  const d = date || new Date()
  return moment(d).format('YYYY-MM-DD[T]HH:mm:ss')
}
