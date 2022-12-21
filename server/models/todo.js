import mongoose from 'mongoose'

const Todo = mongoose.model('Todo', {
	description: {
		type: String,
		required: true,
		trim: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
})

module.exports = Todo
