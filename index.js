// function convertTimestamp(timestamp, format) {
//   let date = new Date(timestamp * 1000)
//   return date.toLocaleDateString()
// }

// module.exports = convertTimestamp

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const convert = {
  toDate: function (timestamp, format) {
    let date = new Date(timestamp * 1000)
    
    // DDMMYYYY
    if (format === 'DDMMYYYY') {
      let day = date.getDate().toString().padStart(2, '0')
      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let year = date.getFullYear()
      return day + '.' + month + '.' + year
    }
    // DDMMYYYYHHmmss
    else if (format === 'DDMMYYYYHHmmss') {
      let day = date.getDate().toString().padStart(2, '0')
      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let year = date.getFullYear()
      let hour = date.getHours().toString().padStart(2, '0')
      let minute = date.getMinutes().toString().padStart(2, '0')
      let second = date.getSeconds().toString().padStart(2, '0')
      return (
        day +
        '.' +
        month +
        '.' +
        year +
        ' ' +
        hour +
        ':' +
        minute +
        ':' +
        second
      )
    }
    // DayName, MonthName Date, Year
    else if (format === 'DDDMMMDDYYYY') {
      const dayName = days[date.getUTCDay()]
      const monthName = months[date.getUTCMonth()]
      const year = date.getUTCFullYear()
      const dateNum = date.getUTCDate()

      return `${dayName}, ${monthName} ${dateNum}, ${year}`
    }
    // YYYYMMDD
    else if (format === 'YYYYMMDD') {
      let day = date.getDate().toString().padStart(2, '0')
      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let year = date.getFullYear()
      return year + '-' + month + '-' + day
    }
    // YYYYMMDDHHmmss
    else if (format === 'YYYYMMDDHHmmss') {
      let day = date.getDate().toString().padStart(2, '0')
      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let year = date.getFullYear()
      let hour = date.getHours().toString().padStart(2, '0')
      let minute = date.getMinutes().toString().padStart(2, '0')
      let second = date.getSeconds().toString().padStart(2, '0')
      return (
        year +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        hour +
        ':' +
        minute +
        ':' +
        second
      )
    } else {
      return date.toLocaleDateString()
    }
  },

  toTime: function (timestamp, format) {
    let date = new Date(timestamp * 1000)
    // HHmm
    if (format === 'HHmm') {
      let hour = date.getHours().toString().padStart(2, '0')
      let minute = date.getMinutes().toString().padStart(2, '0')
      return hour + ':' + minute
    }
    // hhmmss
    else if (format === 'hhmmss') {
      let hour = date.getHours().toString().padStart(2, '0')
      let minute = date.getMinutes().toString().padStart(2, '0')
      let second = date.getSeconds().toString().padStart(2, '0')
      return hour + ':' + minute + ':' + second
    } else {
      return date.toLocaleTimeString()
    }
  },

  now: function (format) {
    let date = new Date()
    // DDMMYYYY
    if (format === 'DDMMYYYY') {
      let day = date.getDate().toString().padStart(2, '0')
      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let year = date.getFullYear()
      return day + '.' + month + '.' + year
    }
    // DDMMYYYYHHmmss
    else if (format === 'DDMMYYYYHHmmss') {
      let day = date.getDate().toString().padStart(2, '0')
      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let year = date.getFullYear()
      let hour = date.getHours().toString().padStart(2, '0')
      let minute = date.getMinutes().toString().padStart(2, '0')
      let second = date.getSeconds().toString().padStart(2, '0')
      return (
        day +
        '.' +
        month +
        '.' +
        year +
        ' ' +
        hour +
        ':' +
        minute +
        ':' +
        second
      )
    }
    // DayName, MonthName Date, Year
    else if (format === 'DDDMMMDDYYYY') {
      const dayName = days[date.getUTCDay()]
      const monthName = months[date.getUTCMonth()]
      const year = date.getUTCFullYear()
      const dateNum = date.getUTCDate()

      return `${dayName}, ${monthName} ${dateNum}, ${year}`
    }
    // YYYYMMDD
    else if (format === 'YYYYMMDD') {
      let day = date.getDate().toString().padStart(2, '0')
      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let year = date.getFullYear()
      return year + '-' + month + '-' + day
    }
    // YYYYMMDDHHmmss
    else if (format === 'YYYYMMDDHHmmss') {
      let day = date.getDate().toString().padStart(2, '0')
      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let year = date.getFullYear()
      let hour = date.getHours().toString().padStart(2, '0')
      let minute = date.getMinutes().toString().padStart(2, '0')
      let second = date.getSeconds().toString().padStart(2, '0')
      return (
        year +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        hour +
        ':' +
        minute +
        ':' +
        second
      )
    }
  },

  toTimestamp: function (date) {
    let timestamp = new Date(date).getTime() / 1000
    return timestamp
  },
}

module.exports = convert
