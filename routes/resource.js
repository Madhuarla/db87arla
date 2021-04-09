var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var sweets_controller = require('../controllers/sweets');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/sweets', sweets_controller.sweets_create_post);
// DELETE request to delete Costume.
router.delete('/sweets/:id', sweets_controller.sweets_delete);
// PUT request to update Costume.
router.put('/sweets/:id', sweets_controller.sweets_update_put);
// GET request for one Costume.
router.get('/sweets/:id', sweets_controller.sweets_detail);
// GET request for list of all Costume items.
router.get('/sweets', sweets_controller.sweets_list);
module.exports = router;