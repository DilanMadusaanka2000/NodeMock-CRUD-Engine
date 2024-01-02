import express from 'express';


//import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import {creatUser , getUsers , getUser , deletUser , updateUser} from '../controller/user.js';


const router = express.Router();







// all routers are stating with  /users if put "/user" this mean "/user/users" this gives erro message
router.get('/',getUsers);

router.post('/',creatUser);   //post req 

router.get('/:id',getUser );

router.delete('/:id',deletUser);

router.patch('/:id', updateUser);

export default router;