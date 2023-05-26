/**
 * userValidation.js
 * @description :: validate each post and put request as per user model
 */

const joi = require('joi');

/** validation keys and properties of user */
exports.schemaKeys = joi.object({
  username: joi.string().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  name: joi.string().allow(null).allow(''),
  userType: joi.number().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  mobileNo: joi.string().allow(null).allow(''),
}).unknown(true);
