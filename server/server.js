import express from 'express'
import bodyParser from 'body-parser'

// import environment variable
import { port } from '../config/config'

// import db file without used
import db from './database'

// import routes
import userRoutes from './routes/user'
import authRoutes from './routes/auth'

const app = express()

app.use(bodyParser.json())

app.use('/', authRoutes)
app.use('/', userRoutes)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
