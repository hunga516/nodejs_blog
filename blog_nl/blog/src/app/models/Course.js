const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: "Default name" },
    description: { type: String, default: "Default description" },
    images: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5V5g68dTYlES7tgY55eWdnJSChHU27m1kg&s" }
    // slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', Course);
