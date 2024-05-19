const mongoose = require('mongoose');

async function dbconnect(){
    await mongoose.connect('mongodb+srv://zunairaansari413:0IBPV249gVrtF69x@cluster0.wbc1j8r.mongodb.net/');
}

module.exports = dbconnect;