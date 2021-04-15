var express = require('express');
const sweets_controlers= require('../controllers/sweets');
var router = express.Router();
/* GET costumes */
router.get('/', sweets_controlers.sweets_view_all_Page );
module.exports = router;
/* GET detail costume page */
router.get('/detail', sweets_controlers.sweets_view_one_Page);
