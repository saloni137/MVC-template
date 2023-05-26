/**
 * index.js
 * @description :: index route of all models
 */

const express = require('express');
const router = express.Router();

router.use('/user',require('./user'));

module.exports = router;