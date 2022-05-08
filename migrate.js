import { Migrator, Output } from './migrator/index.js'

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dbConfig = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'aknakn0091',
  database: 'akn'
}
const migrationsPath = __dirname + '/migtest'
const migrator = new Migrator(dbConfig, migrationsPath)
const result = await migrator.init()
Output(result)
process.exit()
