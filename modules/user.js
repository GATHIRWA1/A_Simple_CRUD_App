const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;




const UserSchema = new Schema({

    email: {
        type: String,
        required: [true, 'Email Field is Required '],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required '],
        minLength: [6, 'Password should be atleast 6 characters']
    },

});

//to login a user we create a static method 

UserSchema.statics.login = async function (email , password){
    const user = await this.findOne({ email });
    //check whether that user exists in our db
if (user) {
   const auth = await bcrypt.compare(password , user.password);
   if (auth) {
    return user;   
   }
   throw Error('incorrect password ');
        
    }
    throw Error('incorrect email ');
},


UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


const user = mongoose.model('user', UserSchema);





module.exports = user;