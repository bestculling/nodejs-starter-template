import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: 'Name is required',
	},
	email: {
		type: String,
		trim: true,
		unique: 'Email already exists',
		lowercase: true,
		match: [/.+\@.+\..+/, 'Please fill a valid email address'],
		required: 'Email is required',
	},
	hashed_password: {
		type: String,
		required: 'Password is required',
	},
	salt: String,
	updated: Date,
	created: {
		type: Date,
		default: Date.now,
	},
})

export default mongoose.model('User', UserSchema)
