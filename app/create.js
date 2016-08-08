var User = require('./models/users.js');

//create a new users
var newUser = User({
  name: 'Mugeri',
  username: 'starLord55',
  password: 'password'
});

newUser.dudify(function(err, name) {
  if(err) throw err;
  console.log('Your new name is ' + name);
});

//save the user
newUser.save(function (err) {
  if (err) throw err;
  console.log('User saved successfully!');
});
