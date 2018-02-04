var express = require('express');
var router = express.Router();
var pool = require('../../config/db')
const ResponseBody = require('../../models/ResponseBody')

/* GET users listing. */
router.get('/', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    if(err){
      res.status(500).send('database connection failed');
      return false
    }
    let query = 'SELECT * from users'
    try {
      connection.query(query, function (err, rows) {
        if (err) {
          console.log('an error')

          res.status(500).send(ResponseBody);
          return false
        }
        ResponseBody.success = true
        ResponseBody.data = rows
        res.status(200).send(ResponseBody)
      })
    } finally {
      connection.release()
    }
  })
});

module.exports = router;