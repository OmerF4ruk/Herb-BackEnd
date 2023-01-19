import dataCont from "../Controllers/herbDataController.js";

import  express  from "express";    
const router = express.Router();

router.route("/").post(dataCont.newData).get(dataCont.getData);
export default router