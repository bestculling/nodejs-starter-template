import { Router } from 'express'
import user from '../controllers/user'

const router = Router()

router.route('/api/users').get(user.list).post(user.create)

router.route('/api/users/:userId').get(user.read)

export default router
