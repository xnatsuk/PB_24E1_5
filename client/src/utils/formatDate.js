import moment from 'moment/min/moment-with-locales'

moment.locale('pt-br')

export function formatter(date) {
  return moment(date).fromNow()
}
