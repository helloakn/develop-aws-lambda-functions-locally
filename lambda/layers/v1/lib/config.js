require('dotenv').config()

module.exports = {
  DatabaseConfig: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    port: process.env.DB_PORT || 3306,
    password: process.env.DB_PASSWORD || 'sutaung',
    database: process.env.DB_DATABASE || 'akn'
  },
  ServerConfig: {
    PORT: process.env.PORT || 9999,
    allowFrom: process.env.allowFrom || '*'
  },
  JKey: {
    admin: process.env.ADMIN_KEY || 'UIjHT^&*tyUHT^&*IKHUIHT&*UJHT^&3UJTYUIjHT^&*IKHU7IHyhT&*UJHT4^&UJTYUIjHT^&*tyUIKGT&',
    user: process.env.USER_KEY || 'UyUT&*UJ6IjHT^&*tUIHHcT^&UJTYUIjHT^3&*IKHU5I8HyhT&*3UJcHT^&UJTYUIjHT^&*5tyUIKGT&'
  },
  Path: {
    services: '../'
  },
  StatusCodes: {
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NoContent: 204,
    BadRequest: 400,
    UnAuthorize: 401,
    Forbidden: 403,
    NotFound: 404,
    NotAcceptable: 406,
    UnSupportedMediaType: 415,
    UpgradeRequired: 426,
    TooManyRequests: 429
  }
}
