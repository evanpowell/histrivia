const db = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});


db.schema.hasTable('users').then(exists => {
  if (!exists) {
    return db.schema.createTable('users', t => {
      t.string('username');
      t.integer('score');
    })
  }
});

module.exports = db;

// const addUser = (username, cb) => {
//   knex('users').insert({username: username, score:0})
//     .then(() => {
//       cb('Success');
//     })
//     .catch(err => {
//       cb('Unsuccess');
//     });
// }