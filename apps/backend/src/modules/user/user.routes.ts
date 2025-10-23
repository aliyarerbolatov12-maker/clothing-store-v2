import express from 'express';
import { getAllUsers} from '@/modules/user/user.controller';

const router = express.Router();

router.get('/', getAllUsers);


export default router;
