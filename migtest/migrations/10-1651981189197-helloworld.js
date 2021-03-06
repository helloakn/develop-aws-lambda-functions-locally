module.exports = {
  up: (tbl) => {
    return tbl.create('helloworld', {
      id: 'int NOT NULL PRIMARY KEY AUTO_INCREMENT',
      name: 'varchar(254) NOT NULL',
      batch: 'int NOT NULL',
      created_at: 'varchar(254) NOT NULL'
    })
  },
  rollback: (tbl) => {
    return tbl.dropTable('helloworld')
  }
}
