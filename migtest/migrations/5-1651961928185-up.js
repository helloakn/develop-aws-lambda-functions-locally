module.exports = {
  up: async (tbl) => {
    // console.log('haha')
    return await tbl.create('test1', {
      id: 'int NOT NULL PRIMARY KEY AUTO_INCREMENT',
      name: 'varchar(254) NOT NULL',
      batch: 'int NOT NULL',
      created_at: 'varchar(254) NOT NULL'
    })
  },
  rollback: async (tbl) => {
    return await tbl.dropTable('test1')
  }
}
