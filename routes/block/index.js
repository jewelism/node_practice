const express = require('express')
const router = express.Router()
const pool = require('../../config/db')

const Block = require('../../models/Block')
const Blockchain = require('../../models/Blockchain')
const ResponseBody = require('../../models/ResponseBody')

/* GET users listing. */
router.get('/', (req, res, next) => {
  let bc = new Blockchain()
  bc.addBlock(new Block(1, "20/07/2017", { amount: 4 }))
  bc.addBlock(new Block(2, "20/07/2017", { amount: 8 }))

  ResponseBody.success = true
  ResponseBody.data = []
  ResponseBody.data.push('Blockchain valid? ' + bc.isChainValid())
  console.log('Blockchain valid? ' + bc.isChainValid())
  bc.chain[1].data = { amount: 100 }
  ResponseBody.data.push('Blockchain valid? ' + bc.isChainValid())
  console.log("Blockchain valid? " + bc.isChainValid())
  res.status(200).send(ResponseBody)
});

module.exports = router;