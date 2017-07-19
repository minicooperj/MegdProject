/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

// Other oauthtypes to be added

/*
 User Schema
 */

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  tokens: Array,
  username: {type: String, unique: true},
  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    age: { type: Number, min: 18 },
    location: { type: String, default: '' },
    picture: { type: String, default: '' },
    phone: {type: String, default:''},
    reputation: {type: Number, default: 0},
    favTeam:{type: String, default: ''},
    favPosition:{type: String, default: ''},
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  google: {},
  recentlyTexted: {type: Boolean},
  friends: Array,
  updated: { type: Date, default: Date.now },
});

function encryptPassword(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  return bcrypt.genSalt(5, (saltErr, salt) => {
    if (saltErr) return next(saltErr);
    return bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      user.password = hash;
      return next();
    });
  });
}

/**
 * Password hash middleware.
 */
UserSchema.pre('save', encryptPassword);

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {
  comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return cb(err);
      return cb(null, isMatch);
    });
  }
};

/**
 * Statics
 */

UserSchema.statics = {};

export default mongoose.model('User', UserSchema);
