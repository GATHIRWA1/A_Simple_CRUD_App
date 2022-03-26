const mongoose = require('mongoose');

const Schema = mongoose.Schema;




const NinjaSchema = new Schema({

    name: { type: String, required: [true, 'This is Field is Required '], unique: true },
    rank: { type: String, required: true },
    available: { type: Boolean, default: false }
});


const Ninja = mongoose.model('ninja', NinjaSchema);


module.exports = Ninja;