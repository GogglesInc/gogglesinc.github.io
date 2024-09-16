const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
	res.send({
		name: 'API',
		detail: 'GogglesInc.\'s API',
		status: 'active'
	});
});

router.get('/v0.0.1', function (req, res, next) {
	res.send({
		name: 'API',
		version: '0.0.1',
		detail: 'GogglesInc.\'s API',
		status: 'stable'
	});
});

module.exports = router;
