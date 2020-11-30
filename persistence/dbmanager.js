var mongoose = require('mongoose');
var dev_db_url = "mongodb://localhost:27017/db_users";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var User = require('./user');

exports.user_create = (req, res, next) => {
    var user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save((err) => {
        if (err) {
            return next(err);
        }
        res.send({ 'message': 'OK' });
    });
}