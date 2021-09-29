import {Router} from 'express';
import controller from './calendar.controller.js';

const router = Router();

router.route("/")
    //new user register
    .post(controller.create);

router.route("/")
//.post(controller.login);

export default router;