const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
    first: {
        type: String,
        require: true
    },
    last: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.Now
    }
})

module.exports = User = mongoose.model('user', UserSchema)