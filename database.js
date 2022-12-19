import { connect, connection } from 'mongoose'
// import environment variables
import dotenv from 'dotenv'

dotenv.config()

// Database setup
connect(
	`mongodb+srv://admin:${process.env.DB_PASS}@cluster0.jhe1i6p.mongodb.net/?retryWrites=true&w=majority`,
	{ useNewUrlParser: true }
)

const db = connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
	console.log('Database connected')
})

module.exports = db
