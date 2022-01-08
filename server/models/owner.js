const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ownerSchema = new Schema({
    name: String,
    about: String,
    photo: String
})

module.exports = mongoose.model('Owner', ownerSchema)