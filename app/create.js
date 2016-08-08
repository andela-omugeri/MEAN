var User = require('./models/users.js');

//create a new users
var mugeri = new User({
  name: 'Mugeri',
  username: 'me',
  password: 'password'
});

mugeri.dudify(function(err, name) {
  if(err) throw err;
  console.log('Your new name is ' + name);
});

mugeri.save(function (err) {
  if (err) throw err;
  console.log('User saved successfully!');
});
