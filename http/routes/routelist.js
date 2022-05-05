module.exports.routelist = [
  {
    name: 'Computer',
    endpoint: 'api/computer',
    method: 'get',
    authorizer: null,
    lambda_path: 'lambda/functions/computer/index.js'
  },
  {
    name: 'Phone',
    endpoint: 'api/phone',
    method: 'get',
    authorizer: null,
    lambda_path: 'lambda/functions/phone/index.js'
  }
]
