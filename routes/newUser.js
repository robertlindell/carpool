var express = require('express');
var router = express.Router();

/*
	Rendering the data form.
*/

router.get('/', function(req, res, next) {

	res.render('newUser', {
        username: req.cookies.username
	});

});

module.exports = router;