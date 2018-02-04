const express = require('express')
const router = express.Router()

const user = require('./user/routes')
router.use('/user', user)

const block = require('./block/routes')
router.use('/block', block)

module.exports = router;