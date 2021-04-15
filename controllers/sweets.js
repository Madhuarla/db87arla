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
// exports.sweets_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: sweets detail: ' + req.params.id);
// };

exports.sweets_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await sweets.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle Costume delete on DELETE.
exports.sweets_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await sweets.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Costume update form on PUT.
// exports.sweets_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: sweets update PUT' + req.params.id);
// };

exports.sweets_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await sweets.findById( req.params.id)
        // Do updates of properties
        if(req.body.origin) toUpdate.origin = req.body.origin;
        if(req.body.quantity) toUpdate.quantity = req.body.quantity;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

    // Handle a show one view with id specified by query
exports.sweets_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await sweets.findById( req.query.id)
        res.render('sweetsdetail', 
{ title: 'sweets Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
