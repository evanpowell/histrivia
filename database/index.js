const db = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});


db.schema.hasTable('users').then(exists => {
  if (!exists) {
    return db.schema.createTable('users', t => {
      t.string('username').unique();
      t.integer('score');
    })
  }
});

module.exports = db;