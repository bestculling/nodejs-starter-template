import { connect, connection } from 'mongoose'
// import environment variables
import { db_pass } from '../config/config'

// Database setup
connect(
	`mongodb+srv://admin:${db_pass}@cluster0.jhe1i6p.mongodb.net/?retryWrites=true&w=majority`,
	{ useNewUrlParser: true }
)

const db = connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
	console.log('Database connected')
})

module.exports = db
