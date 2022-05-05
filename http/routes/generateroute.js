const { routelist } = require('./routelist.js')

module.exports = (_app) => {
  const handler = async (req, res) => {
    let response
    if (typeof req.functionName === 'function') {
      response = await req.functionName()
    } else {
      const lambdaPath = req.lambda_path
      const controller = require(lambdaPath)
      response = await controller.handler(req)
    }
    res.set(response.headers || {
      'Content-Type': 'application/json',
      'X-Powered-By': '-'
    })
    return res.status(response.statusCode || 200).send(response.body || {})
  }

  const middleware = (_authorizer, _lambdaPath, _functionName) => {
    return async (req, res, next) => {
      req.lambda_path = _lambdaPath
      req.functionName = _functionName
      if (_authorizer === undefined || _authorizer === null) {
        return next()
      } else {
        return await _authorizer(req, res, next)
      }
    }
  }

  routelist.forEach(lambda => {
    console.log('route', lambda)
    switch (lambda.method) {
      case 'get':
        _app.route('/hello')
          .get(
            middleware(lambda.authorizer, lambda.lambda_path, lambda.function || null)
            ,
            handler
          )
        break
      case 'post':
        _app.route('/hello')
          .get(
            middleware(lambda.authorizer, lambda.lambda_path, lambda.function || null)
            ,
            handler
          )
        break
    }
  })
}
