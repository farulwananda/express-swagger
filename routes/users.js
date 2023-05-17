var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns a list of users
 *     description: Returns a list of users
 *     responses:
 *       200:
 *         description: A list of users
 */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
