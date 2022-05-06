// what?
const { DatabaseConfig } = require('commonlayer')

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: DatabaseConfig.database + DatabaseConfig.password
  }
  return response
}
