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

UserSchema.virtual('password')
	.set(function (password) {
		this._password = password
		this.hashed_password = this.encryptPassword(password)
	})
	.get(function () {
		return this._password
	})

UserSchema.methods = {
	encryptPassword: function (password) {
		if (!password) return ''
		try {
			return password
		} catch (err) {
			return ''
		}
	},
}

export default mongoose.model('User', UserSchema)
