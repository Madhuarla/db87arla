var sweets = require('../models/sweets');
// List of all Costumes
exports.sweets_list = async function(req, res) {
    try{
    thesweets = await sweets.find();
    res.send(thesweets);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// for a specific Costume.
exports.sweets_detail = function(req, res) {
res.send('NOT IMPLEMENTED: sweets detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.sweets_create_post = async function(req, res) {
    console.log(req.body)
    let document = new sweets();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.origin = req.body.origin;
    document.quantity = req.body.quantity;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// Handle Costume delete form on DELETE.
exports.sweets_delete = function(req, res) {
res.send('NOT IMPLEMENTED: sweets delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.sweets_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: sweets update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.sweets_view_all_Page = async function(req, res) {
    try{
    thesweets = await sweets.find();
    res.render('sweets', { title: 'Sweets Search Results', results: thesweets });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };