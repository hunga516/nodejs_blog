const mongoose = require('mongoose')

async function Connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education');
        console.log("Connect mongodb successfully!!");
    } catch (error) {
        console.log("Connect mongodb failed!!");
    }
}

module.exports = { Connect }