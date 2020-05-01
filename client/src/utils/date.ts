import dayjs from 'dayjs'

export function toUserFriendlyFullDate(date) {
  if (!date) return ''
  return dayjs(date).format('MMM D YYYY h:mm a')
}

export function toDateTime(date: string) {
  const d = date || new Date()
  return dayjs(d).format('YYYY-MM-DD[T]HH:mm:ss')
}
