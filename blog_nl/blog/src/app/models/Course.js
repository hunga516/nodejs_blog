const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, default: "Default name" }, //default will enable if type === undefined
    description: { type: String, default: "Default description" },
    images: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5V5g68dTYlES7tgY55eWdnJSChHU27m1kg&s" },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
});

//Add plugins
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
    deletedBy: true
});

module.exports = mongoose.model('Course', CourseSchema);
