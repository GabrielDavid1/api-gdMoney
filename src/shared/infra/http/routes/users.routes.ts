import { Router } from "express";

import updateUserController from "../../../../modules/user/controller/updateUserController";
import listUserController from "../../../../modules/user/controller/listUserController";
import createUserController from "../../../../modules/user/controller/createUserController";
import deleteUserController from "../../../../modules/user/controller/deleteUserController";
import listProfileUserController from "../../../../modules/user/controller/listProfileUserController";
import { ensureAuthenticated } from "../../middleware/ensureAuthenticate";
import getBnbBalanceUserController from "../../../../modules/user/controller/getBnbBalanceUserController";

const usersRoutes = Router();

//List all users - GET [OK]
usersRoutes.get(
  "/", 
  ensureAuthenticated, 
  (req, res) => {
    listUserController(req, res)
  }
);

//List profile user - GET [OK]
usersRoutes.get(
  "/profile/:id", 
  ensureAuthenticated, 
  (req, res) => {
    listProfileUserController(req, res)
  }
);

//Create user - POST [OK]
usersRoutes.post(
  "/create", 
  (req, res) => {
    createUserController(req, res)
  }
);

//Update user - PUT [OK]
usersRoutes.put(
  "/update/:id", 
  ensureAuthenticated, 
  (req, res) => {
    updateUserController(req, res)
  }
);

//Delete user - DELETE [OK]
usersRoutes.delete(
  "/delete/:id", 
  ensureAuthenticated, 
  (req, res) => {
    deleteUserController(req, res)
  }
);

/***************** BLOCKCHAIN USER *******************/
usersRoutes.get(
  "/profile/getbalancebnb/:id",
  (req, res) => {
    getBnbBalanceUserController(req, res)
  }
);

export { usersRoutes };
