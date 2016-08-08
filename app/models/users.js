var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/myappdb');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'CONNECTION ERROR'));
// db.once('open', function() {
//   //we're connected!
// });

//create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

userSchema.methods.dudify =  function () {
  this.name = this.name + '-dude';
  return this.name;
};

//on every save add the Date
userSchema.pre('save', function(next) {
  //get the current Date
  var currentDate = new Date();

  //change the updated_at to the current Date
  this.updated_at = currentDate;

  if(!this.created_at)
    this.created_at = currentDate;

  next();
});

//create a model using the schema
var User =  mongoose.model('User', userSchema);

//make this available to our users in our Node applications
module.exports = User;
