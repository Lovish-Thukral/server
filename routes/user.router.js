import { Router } from "express";
import { findUser, signupUser, loginUser } from '../controllers/user.controller.js';


const router = Router();

router.get('/find', findUser);
router.post('/signup', signupUser);
router.post('/login', loginUser); 





export default router;