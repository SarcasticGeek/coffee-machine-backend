var express = require('express');
var machinesController = require('../controllers/machines.controller');

const router = express.Router();

router.get('/', machinesController.getMachines);

module.exports = router;