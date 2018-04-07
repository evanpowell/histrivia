const axios = require('axios');

const retrieveQuestion = (cb) => {
  const options = {
    params: {
      amount: 1,
      category: 23,
      difficulty: 'easy',
      type: 'multiple'
    }
  }
  axios.get('http://opentdb.com/api.php', options)
  .then(response => {
    cb(null, response);
  })
  .catch(err => {
    cb(err);
  })
}

module.exports = retrieveQuestion;