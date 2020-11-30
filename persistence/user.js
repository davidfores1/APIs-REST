var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, required: true, max: 150 },
    age: { type: Number, required: true },
});

module.exports = mongoose.model('User', UserSchema);