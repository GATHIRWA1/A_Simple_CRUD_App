
const User = require('../modules/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;

//passing a token 
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id)=>{
    return jwt.sign({id}, SECRET_KEY ,{
        expiresIn:maxAge
    })
       
    
}
module.exports.signup_get = (req, res) => {
    res.send('hello from auth ');
}

module.exports.login_get = (req, res) => {
    res.send('hello from auth ');
}

module.exports.signup_post = (req, res, next) => {
    //first search for diplicate record
    var query = req.body.email;
    User.findOne({ email: query }, function(err, user) {
        if (err) console.log(err);
        if (user) {
            res.send('A user by that email already exists');
            console.log("This has already been saved");
        } else {

            User.create(req.body).then(function(user) {
                //sending the token 
                const token = createToken(user._id);
                
                res.cookie('jwt', token ,{httpOnly:true ,maxAge : maxAge * 1000});
                res.status(201).json({user:user._id , token });

            }).catch(next);
        }
    });
}

module.exports.login_post = async (req, res) => {
   // const { email, password } = req.body;
    
    // Our login logic starts here
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
       const token = createToken(user._id);
        // save user token
      user.token = token;
      res.cookie('jwt', token ,{httpOnly:true ,maxAge : maxAge * 1000}); 
      // user
    res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our login logic ends here
}
   
