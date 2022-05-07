import { Migrator } from './migrator/index.js'
const dbConfig = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'aknakn0091',
  database: 'akn'
}
const migrator = new Migrator(dbConfig, './migtest')
migrator.init()
