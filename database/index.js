const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

const addUser = (username, cb) => {
  User
    .build({
      username: username
    })
    .save()
    .then(() => {
      cb();
    })
    .catch(err => {
      cb(err);
    });
}

const retrievePoints = (username) => {
  return User.findOne({
    where: {
      username: username
    },
    attribues: ['points']
  });
}

const addPoints = (username) => {
  const points = retrievePoints(username);
  User.update({
    points: Sequelize.literal('points + 1')
  },
  {
    where: {
      username: {
        [Op.eq]: username
      }
    }
  })
}

module.exports.addUser = addUser;
module.exports.retrievePoints = retrievePoints;
module.exports.addPoints = addPoints;