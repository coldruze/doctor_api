import Router from "express";
import { appointment, addUser, addDoctor } from "../controllers/controllers.js";


const router = new Router();


router.post("/appointment", appointment);
router.post("/adduser", addUser);
router.post("/adddoctor", addDoctor);


export { router };