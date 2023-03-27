import Router from "express";
import { appointment } from "../controllers/controllers.js";


const router = new Router();


router.post("/appointment", appointment);


export { router };