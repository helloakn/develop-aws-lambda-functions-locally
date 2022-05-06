const sql = require('./sql.js')

class AdminModel extends sql {
  constructor () {
    super()
    this.tableName = 'tblAdmin'
  }
}

module.exports.AdminModel = AdminModel
