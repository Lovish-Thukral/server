import { Router } from "express";
import findusercontroller from "../controllers/finduser.controller.js";
import addusercontroller from "../controllers/adduser.controller.js";
import editusercontroller from "../controllers/edituser.controller.js";

const userrouter = Router();


userrouter.post('/find/user', findusercontroller);
// userrouter.delete('/delete/user', deleteusercontroller);
userrouter.post('/add/user', addusercontroller);
userrouter.get('/edit/user', editusercontroller);




export default userrouter;