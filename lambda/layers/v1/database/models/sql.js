const mysql = require('mysql')
const { DatabaseConfig } = require('../lib/config.js')

const mysqlConnection = mysql.createConnection({
  host: DatabaseConfig.host,
  user: DatabaseConfig.user,
  port: DatabaseConfig.port,
  password: DatabaseConfig.password,
  database: DatabaseConfig.database
})

console.log('mysqlConnection', mysqlConnection)
// open the MySQL connection
mysqlConnection.connect(error => {
  if (error) throw error
  console.log('Successfully connected to the database.')
})

class SqlAdapter {
  constructor () {
    this.sql = mysqlConnection
  }

  insertData = (tableName, newRecord) => {
    return new Promise(resolve => {
      this.sql.query(`INSERT INTO ${tableName} SET ?`, newRecord, (err, res) => {
        if (err) {
          resolve({ isError: true, data: err })
        }
        resolve({ isError: false, data: { id: res.insertId, ...newRecord } })
      })
    })// end Promise
  }// end getRecordById function

  getRecordByQuery = (query) => {
    return new Promise(resolve => {
      this.sql.query(query, (err, res) => {
        if (err) {
          resolve(null)
        }
        if (res.length) {
          resolve(res[0])
        } else {
          resolve(null)
        }
      })
    })
  }

  paginate = (query, _rowCount, _pageAt) => {
    const pageAt = _pageAt - 1
    return new Promise(resolve => {
      let totalPage = 0
      let startFrom = 0
      let paginatecmdString

      this.sql.query(`SELECT count(*) as totalCount from (${query}) totalCount;`,
        (err, res) => {
          if (err) {
            resolve(null)
          }
          if (res.length) {
            totalPage = Math.ceil(res[0].totalCount / _rowCount)
            startFrom = pageAt * _rowCount
            paginatecmdString = query + ` LIMIT ${startFrom},${_rowCount}`
            this.sql.query(paginatecmdString, (er, re) => {
              if (er) {
                resolve(null)
              } else {
                resolve({
                  pagination: {
                    total_record: res[0].totalCount,
                    count_per_page: _rowCount,
                    total_page: totalPage,
                    current_records: re.length,
                    page_at: (pageAt + 1)
                  },
                  data: re
                })
              }
            })
          } else {
            resolve(null)
          }
        })
    })
  }
}

module.exports.sql = SqlAdapter
