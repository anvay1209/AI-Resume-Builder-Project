const express = require('express');
const authController = require('../controllers/auth.controller');
const authRouter = express.Router();
const { authUser } = require('../middlewares/auth.middleware');

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */

authRouter.post("/register", authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access Public   
 */

authRouter.post("/login", authController.loginUserController);

/**
 * @route GET /api/auth/logout
 * @description clear the token from the cookie and blacklist it
 * @access Public   
 */

authRouter.get("/logout", authController.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @description Get the currently logged-in user's details
 * @access Private
 */
authRouter.get("/get-me", authUser, authController.getMeController);


module.exports = authRouter;