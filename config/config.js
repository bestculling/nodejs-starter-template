import { config } from 'dotenv'
config()

const { PORT, DB, DB_PASS } = process.env

export const port = PORT || 8081
export const db = DB
export const db_pass = DB_PASS
