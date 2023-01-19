import userCont from "../Controllers/userController.js";

import express from "express";
const router = express.Router();

router.route("/register").post(userCont.userRegister)
router.route("/login").post(userCont.userLogin)

export default router;