import { Router } from "express";
import { addnewuser, deleteuser, findtheusercontroller, updateUserController } from "../Controller/user.controller.js";

const findusername = Router();

findusername.post('/find/:username', findtheusercontroller)
findusername.post('/update/user', updateUserController);
findusername.delete('/delete/:username', deleteuser );
findusername.post('/add/user', addnewuser );

export default findusername;

