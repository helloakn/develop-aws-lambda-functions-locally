// what?
const config = require('commonlayer/config')
const { DatabaseConfig } = config
exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: DatabaseConfig.database + DatabaseConfig.password
  }
  return response
}
