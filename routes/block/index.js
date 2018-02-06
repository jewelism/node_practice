const express = require('express')
const router = express.Router()
const pool = require('../../config/db')

const Block = require('../../models/Block')
const Blockchain = require('../../models/Blockchain')
const ResponseBody = require('../../models/ResponseBody')

/* GET users listing. */
router.get('/', (req, res, next) => {
  let bc = new Blockchain()

  console.log('Mining block 1')
  bc.addBlock(new Block(1, "20/07/2017", { amount: 4 }))

  console.log('Mining block 2')
  bc.addBlock(new Block(2, "20/07/2017", { amount: 8 }))

  let data = []
  data.push('Blockchain valid? ' + bc.isChainValid())
  bc.chain[1].data = { amount: 100 }
  data.push('Blockchain valid? ' + bc.isChainValid())

  res.status(200).send(new ResponseBody(true, data))
});

module.exports = router;