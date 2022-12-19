import express from 'express'
import bodyParser from 'body-parser'

// import db file without used
import db from './database'
// import environment variables
import dotenv from 'dotenv'

const port = process.env.PORT || 8081
const app = express()
dotenv.config()

app.use(bodyParser.json())

// todolist item
let todoList = []

app.get('/todos', (req, res) => {
	res.json(todoList)
})

// example POST request {
//  "task": "Buy milk",
//  "completed": false
//}

app.post('/todos', (req, res) => {
	const todo = req.body
	todoList.push(todo)
	res.json(todo)
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
