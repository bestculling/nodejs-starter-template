import mongoose from 'mongoose'

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		minLength: 7,
		trim: true,
	},
})

module.exports = User
