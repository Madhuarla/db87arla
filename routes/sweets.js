var express = require('express');
const sweets_controlers= require('../controllers/sweets');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET costumes */
router.get('/', sweets_controlers.sweets_view_all_Page );
module.exports = router;
/* GET detail costume page */
router.get('/detail', sweets_controlers.sweets_view_one_Page);
/* GET create costume page */
router.get('/create', sweets_controlers.sweets_create_Page);
/* GET create update page */
router.get('/update',secured, sweets_controlers.sweets_update_Page);
/* GET create costume page */
router.get('/delete', sweets_controlers.sweets_delete_Page);

