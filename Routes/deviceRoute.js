
import deviceCont from "../Controllers/deviceController.js";

import express from "express";
const router = express.Router();




router.route("/addDevice").post(deviceCont.addDevice)
router.route("/getByDeviceId").get(deviceCont.getDeviceById)
router.route("/getByUserId").get(deviceCont.getDeviceUserId)

export default router