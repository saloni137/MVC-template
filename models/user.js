/**
 * user.js
 * @description :: model of a database collection user
 */

const mongoose = require('mongoose');
const { USER_TYPES } = require('../constants/constants');
const { convertObjectToEnum } = require('../utils/common');

const Schema = mongoose.Schema;
const schema = new Schema(
  {

    username: { type: String },

    password: { type: String },

    email: { type: String },

    name: { type: String },

    userType: {
      type: Number,
      enum: convertObjectToEnum(USER_TYPES),
      required: true
    },

    isActive: {
      type: Boolean,
      default:true 
    },

    isDeleted: {
      type: Boolean,
      default: false 
    },
  }
  , {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
);
schema.pre('save', async function (next) {
  // any logic before saving the document
  next();
});

const User = mongoose.model('users', schema);
module.exports = User;