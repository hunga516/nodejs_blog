module.exports = {
    mutipleMongooseToObject: function mutipleMongooseToObject(mongooses) {
        return mongooses.map(item => item.toObject())
    },
    singleMongooseToObject: function singleMongooseToObject(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}