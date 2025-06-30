import { Router } from "express";
import findusercontroller from "../controllers/finduser.controller.js";
import addusercontroller from "../controllers/adduser.controller.js";
import editusercontroller from "../controllers/edituser.controller.js";
import deleteusercontroller from "../controllers/deleteuser.controller.js";

const userrouter = Router();


userrouter.get('/find/user', findusercontroller);
userrouter.delete('/delete/user', deleteusercontroller);
userrouter.post('/add/user', addusercontroller);
userrouter.put('/edit/user', editusercontroller);




export default userrouter;