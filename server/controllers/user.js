import User from '../models/user'
import { getErrorMessage } from '../helpers/dbErrorHandler'

const create = async (req, res, next) => {
	const user = new User(req.body)
	try {
		await user.save()
		return res.status(200).json({
			message: 'Successfully signed up!',
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
		}).select('name email hashed_password updated created')
	} catch (err) {
		return res.status(400).json({
			error: getErrorMessage(err),
		})
	}
}

const read = (req, res) => {
	// req.profile.hashed_password = undefined
	// req.profile.salt = undefined
	// return res.json(req.profile)
	res.json({
		profile: "test"
	})
}

export default {
	create,
	list,
	read
}
