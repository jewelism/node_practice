var express = require('express');
var router = express.Router();
var pool = require('../../config/db')
var result = require('../../constants').result

/* GET users listing. */
router.get('/', (req, res, next) => {
  pool.getConnection(function (err, connection) {
    if(err){
      res.status(500).send('database connection failed');
      return false
    }
    let query = 'SELECT count(*) as count1 from city'
    try {
      connection.query(query, function (err, rows) {
        if (err) {
          console.log('an error')

          res.status(500).send(result);
          return false
        }
        result.success = true
        result.data = rows
        res.status(200).send(result)
      })
    } finally {
      connection.release()
    }
  })
});

module.exports = router;