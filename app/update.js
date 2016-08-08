var User = require('./models/users.js');

// get a user with ID
User.findById('57a8564080b3d8fe090b954b', function(err, user) {
  if (err) throw err;

  // change the users location and name
  user.location = 'uk';
  user.username = 'Randy';

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });

});

//find and modify
// find the user me update him to starlord 88
User.findOneAndUpdate({ username: 'me' }, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
