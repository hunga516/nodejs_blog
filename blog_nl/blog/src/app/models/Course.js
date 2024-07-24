const { default: mongoose, mongo } = require("mongoose");

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);



const Schema = mongoose.Schema

const Course = new Schema({
    name: { type: String, default: "Default name", maxLength: 255 },
    description: { type: String, default: "Default description", maxLength: 600 },
    images: { type: String, default: "Default images", maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('Course', Course) //1 name of collection, 2 is new schema