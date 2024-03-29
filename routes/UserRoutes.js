// routes/routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// User Routes
router.post('/auth/register', userController.registerUser);
router.post('/auth/login', userController.loginUser);
router.get('/profile', userController.getUserProfile);
router.patch('/profile', userController.updateUserProfile);
router.delete('/profile', userController.deleteUserProfile);


module.exports = router;
