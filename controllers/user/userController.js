const User = require('../../models/user');
const userSchemaKey = require('../../utils/validations/userValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../services/dbService');

const add = async (req,res) => {
  try {
    let params = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      params,
      userSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
    }
    params = new User(params);
    let user = await dbService.create(User, params);
    return res.success({ data: user });
  } catch (error) {
    return res.internalServerError({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id){
      res.badRequest();
    }
    const params = { ...req.body, };
    let validateRequest = validation.validateParamsWithJoi(
      params,
      userSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
    }
    const updatedUser = await dbService.updateOne(User, id, params);
    if (!updatedUser) {
      return res.recordNotFound();
    }
    return res.success({ data: updatedUser });
  } catch (error) {
    return res.internalServerError({ message: error.message });
  }
};

const read = async (req, res) => {
  try {
    const {query, options} = req.body;
    if (!query || !options) {
      return res.badRequest();
    }
    const users = await dbService.findAll(User, query, options);
    if (!users) {
      return res.recordNotFound();
    }
    return res.success({ data: users });
  } catch (error) {
    return res.internalServerError({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.badRequest();
    }
    const deletedUser = await dbService.deleteOne(User, id);
    if (!deletedUser) {
      return res.recordNotFound();
    }
    return res.success({ data: deletedUser });
  } catch (error) {
    return res.internalServerError({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.badRequest();
    }
    const foundUser = await dbService.findById(User,id);
    if (!foundUser) {
      return res.recordNotFound();
    }
    return res.success({ data: foundUser });
  } catch (error) {
    return res.internalServerError({ message: error.message });
  }
};

module.exports = {
  add,
  update,
  read,
  remove,
  getById
};