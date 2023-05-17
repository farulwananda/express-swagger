var express = require('express');
var router = express.Router();


/**
 * @swagger
 * /:
 *   get:
 *     summary: Main page
 *     description: Main Page
 *     responses:
 *       200:
 *         description: Just a main page
 */
/* GET users listing. */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
