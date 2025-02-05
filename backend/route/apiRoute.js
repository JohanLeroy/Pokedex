import express from "express";
import getConnect, {message} from "../controller/messageController.js";
import getUser from "../controller/userController.js";
import getUserUnique from "../controller/userController.js";
const router = express.Router();

router.get('/', getConnect);
router.post('/message', message);
router.get('/user', getUser);
router.post('/user/unique', getUserUnique);

export default router;
