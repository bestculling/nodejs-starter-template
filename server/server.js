import express from 'express'
import bodyParser from 'body-parser'

// import environment variable
import { port } from '../config/config'

// import db file without used
import db from './database'

const app = express()

app.use(bodyParser.json())

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
