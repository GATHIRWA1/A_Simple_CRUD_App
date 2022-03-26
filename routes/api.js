const express = require("express");
const Ninja = require('../modules/ninjas');
const router = express.Router();
const authcontroller = require('../controllers/authcontrollers');


//Get all ninjas 

router.get('/signup', authcontroller.signup_get);
router.get('/login', authcontroller.login_get);
router.post('/signup', authcontroller.signup_post);
router.post('/login', authcontroller.login_post);


router.get('/ninjas', function(req, res) {
    Ninja.find({}).then(function(ninjas) {
        res.send(ninjas);
    });


});


router.post('/ninjas', function(req, res, next) {
    //first search for diplicate record
    var query = req.body.name;
    Ninja.findOne({ name: query }, function(err, ninja) {
        if (err) console.log(err);
        if (ninja) {
            res.send('That record already exists');
            console.log("This has already been saved");
        } else {
            //var ninja = new Ninja(req.body);
            //ninja.save();
            //Or mongoose method called create 
            Ninja.create(req.body).then(function(ninja) {
                res.send(ninja);
            }).catch(next);
        }
    });


});
//delete a record 
router.delete('/ninjas/:id', function(req, res) {
    Ninja.findByIdAndRemove({ _id: req.params.id }).then(function(ninja) {
        res.send(ninja);
    });
});




//update a record 
router.put('/ninjas/:id', function(req, res) {
    Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(ninja) {
        Ninja.findOne({ _id: req.params.id }).then(() => {
            res.send(ninja);
        });
    });
});

module.exports = router;