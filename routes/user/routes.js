const express = require('express');
const router = express.Router();

const userIndex = require('./index')
router.use('/', userIndex)

const findUser = require('./find')
router.use('/', findUser)

module.exports = router;