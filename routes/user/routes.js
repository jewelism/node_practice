const express = require('express');
const router = express.Router();


const userIndex = require('./index')
router.use('/', userIndex);

const userList = require('./list')
router.use('/list', userList);

module.exports = router;