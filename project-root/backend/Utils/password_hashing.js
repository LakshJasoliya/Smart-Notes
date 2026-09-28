const bcrypt = require('bcrypt');

// Assuming req.body.password contains the user's password
const password = req.body.password;

// Generate a salt
const saltRounds = 10;
bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    // Handle error
    return res.status(500).json({ error: 'Error generating salt.' });
  }

  // Hash the password using the salt
  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      // Handle error
      return res.status(500).json({ error: 'Error hashing password.' });
    }

    // Save the hashed password to the database
    // For example, you might save it to the user document
    // user.password = hash;
  });
});
