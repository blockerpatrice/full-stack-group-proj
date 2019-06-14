const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const message = new Schema({
    userId: String, 
    text: String
})

module.exports = mongoose.model("messages", message)