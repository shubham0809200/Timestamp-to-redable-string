# Timestamp-to-date Converter

# Timestamp-to-Readable-String-Converter [![](https://img.shields.io/badge/-npm-red)](https://www.npmjs.com/package/timestamp-to-string)

## Description

A timestamp to readable string or timestamp to date converter is a function that takes a timestamp as input and returns a human-readable date string in a specific format (such as "DayName, MonthName Date, Year"). This is useful for presenting timestamps in a more user-friendly way, and can be customized to match a variety of date and time formats.

## Installation

```bash
npm install timestamp-to-string
```

## Usage

```javascript
const convert = require('timestamp-to-string')

// Convert timestamp to date

const timestamp = 1614131200
const date = convert.toDate(timestamp, 'YYYYMMDD')
console.log(date) // 2021-02-25
```

```javascript
const convert = require('timestamp-to-string')

// Convert timestamp to readable string

const timestamp = 1614131200
const date = convert.now('DDDMMMDDYYYY')
console.log(date) // Friday, February 26, 2021
```

## Options

### toDate(timestamp, format)

| Parameter | Type   | Description                                                                            |
| --------- | ------ | -------------------------------------------------------------------------------------- |
| timestamp | Number | Timestamp to be converted to date.                                                     |
| format    | String | Format of the date to be returned. See [format](#to-date-formate) for more information |

### now(format)

| Parameter | Type   | Description                                                                        |
| --------- | ------ | ---------------------------------------------------------------------------------- |
| format    | String | Format of the date to be returned. See [format](#now-formate) for more information |

### toTime(timestamp, format)

| Parameter | Type   | Description                                                                            |
| --------- | ------ | -------------------------------------------------------------------------------------- |
| timestamp | Number | Timestamp to be converted to time.                                                     |
| format    | String | Format of the time to be returned. See [format](#to-time-formate) for more information |

### To Date Formate

| Format         | Description               |
| -------------- | ------------------------- |
| DDMMYYYY       | 25/02/2021                |
| DDMMYYYYHHmmss | 25/02/2021 00:00:00       |
| DDDMMMDDYYYY   | Friday, February 26, 2021 |
| YYYYMMDD       | 2021-02-25                |
| YYYYMMDDHHmmss | 2021-02-25 00:00:00       |
| no formate     | 07/11/2022                |

### Now Formate

| Format         | Description               |
| -------------- | ------------------------- |
| DDMMYYYY       | 25/02/2021                |
| DDMMYYYYHHmmss | 25/02/2021 00:00:00       |
| DDDMMMDDYYYY   | Friday, February 26, 2021 |
| YYYYMMDD       | 2021-02-25                |
| YYYYMMDDHHmmss | 2021-02-25 00:00:00       |
| no formate     | 07/11/2022                |

### To Time Formate

| Format     | Description |
| ---------- | ----------- |
| HHmm       | 00:00       |
| hhmmss     | 00:00:00    |
| no formate | 07:11:22    |

## Github Repository

[Timestamp To Readable String ](https://github.com/shubham0809200/Timestamp-to-redable-string)

## Author

Shubham Kumar - [Github](https://github.com/shubham0809200)
