import { Router } from "express";
import { findUser, signupUser, loginUser, deleteUser, logoutuser, editUser } from '../controllers/user.controller.js';
import middleauth from "../middleware/middle_auth.js";
import protectedLogin from "../middleware/protectedLogin.js";
import { postController } from "../controllers/UserPosts.controller.js";


const router = Router();

router.post('/signup', protectedLogin, signupUser);
router.post('/login', protectedLogin, loginUser); 
router.put('/edit/:editToMake', middleauth, editUser);
router.get('/getuser', middleauth ,findUser);
router.delete('/delete', middleauth, deleteUser);
router.post('/logout', middleauth, logoutuser);
// router.get('/post/:postparams',  )
router.put('/postUpload', middleauth, postController)



export default router;