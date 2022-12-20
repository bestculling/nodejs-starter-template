import express from 'express'
import bodyParser from 'body-parser'

// import db file without used
import db from './database'
// import environment variables
import dotenv from 'dotenv'

// test import models
import User from './models/user'

const port = process.env.PORT || 8081
const app = express()
dotenv.config()

app.use(bodyParser.json())

// Test
app.post('/users', (req, res) => {
	const user = new User(req.body)

	user.save()
		.then(() => {
			res.send(user)
		})
		.catch((e) => {
			res.status(400).send(e)
		})
})

// todolist item
let todoList = []

app.get('/todos', (req, res) => {
	res.json(todoList)
})

app.post('/todos', (req, res) => {
	const todo = req.body
	todoList.push(todo)
	res.json(todo)
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
