/**
 * index.js
 * @description :: CRUD API routes for user
 */

const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user/userController');

router.route('/create').post(userController.add);
router.route('/list').post(userController.read);
router.route('/:id').get(userController.getById);
router.route('/update/:id').put(userController.update);
router.route('/delete/:id').delete(userController.remove);

module.exports = router;