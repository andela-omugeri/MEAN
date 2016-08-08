var User = require('./models/users.js');

//find all users
User.find({}, function(err, users) {
  if (err) throw err;

  console.log(users);
});

//find a specific user
User.find({username: 'me'}, function(err, user) {
  if (err)  throw err;
  console.log(user);
});

//find by ID
User.findById('57a8564080b3d8fe090b954b', function(err, user) {
  if (err) throw err;
  console.log(user);
});
