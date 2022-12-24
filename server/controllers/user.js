import User from '../models/user'
import { getErrorMessage } from '../helpers/dbErrorHandler'

const create = (req, res, next) => {
	const user = new User(req.body)
	try {
		user.save((err, result) => {
			res.status(200).json({
				message: 'Successfully signed up!',
			})
		})
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		})
	}
}

const list = (req, res) => {
	try {
		User.find((err, users) => {
			res.json(users)
		}).select('name email updated created')
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		})
	}
}

export default {
	create,
	list,
}
