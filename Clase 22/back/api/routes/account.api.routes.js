import { Router } from 'express'
import * as controllers from '../controllers/account.controllers.js'
import { validateAccount } from '../../middlewares/account.validate.middleware.js'
import { tokenVerify } from '../../middlewares/token.validate.middleware.js'


const router = Router()

// /register
router.post('/account', [validateAccount], controllers.createAccount)

router.post('/session', [validateAccount], controllers.login)

router.delete('/session', [tokenVerify], controllers.logout)


export default router