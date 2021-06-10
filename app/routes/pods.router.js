var express = require('express');
var podsController = require('../controllers/pods.controller');

const router = express.Router();

router.get('/', podsController.getPods);

module.exports = router;