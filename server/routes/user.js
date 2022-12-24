import express from 'express'
import user from '../controllers/user'

const router = express.Router()

router.route('/api/users').get(user.list).post(user.create)

export default router
