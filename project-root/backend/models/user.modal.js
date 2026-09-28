const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'],
    default: 'user',
  },
  verified_email : {
    type: String,
    required: true,
    enum: ['yes', 'no'],
    default: 'no',
  },
  two_fa: {
    type: String,
    required: true,
    enum: ['enabled', 'disabled'],
    default: 'disabled',
  }
});

// Hash password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (err) {
//     return next(err);
//   }
// });

const User = mongoose.model('User', userSchema);
module.exports = User;
