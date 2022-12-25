import User from '../models/user'

const signin = async (req, res) => {
	try {
		let user = await User.findOne({
			email: req.body.email,
		})
		if (!user)
			return res.status(401).json({
				error: 'User not found',
			})
		// if (!user.authenticate(req.body.password)) {
		// 	return res.status(401).send({
		// 		error: 'Email and Password do not match',
		// 	})
		// }
	} catch (err) {
		return res.status(401).json({
			error: 'Could not sign in',
		})
	}
}

export default {
	signin,
}
