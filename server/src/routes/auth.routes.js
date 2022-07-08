import {Router} from 'express';
import { registerDefinition, registerSchema } from 'swaggiffy';
import { signup, signin, getProfile ,signupAdmin} from '../controllers/auth.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', signup);
router.post('/register/admin',signupAdmin);
router.post('/signin', signin);

router.get('/profile', AuthMiddleware, getProfile);

const authDto  = {
    name: '',
    address: '',
    email: '',
    phone: '',
    nationalId: '',
    role: '',
    password: ''
}
registerSchema('AuthDto', authDto);
registerDefinition(router, { tags: "Auth", mappedSchema: "AuthDto", basePath: "/api/v1/auth" });
export default router;
