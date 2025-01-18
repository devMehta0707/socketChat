const router = require('express').Router();
const { login } = require('../controller/controller.js');

router.get('/',login)

module.exports = router;