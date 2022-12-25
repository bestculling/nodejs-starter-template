import { Router } from 'express'
import auth from '../controllers/auth'

const router = Router()

router.route('/auth/signin').post(auth.signin)

export default router
