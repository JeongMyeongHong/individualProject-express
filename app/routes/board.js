import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import BoardService from '../services/board.js'

dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.post('/register', cors(corsOptions), (req, res) => {
    BoardService().register(req, res)
})
app.post('/showList', cors(corsOptions), (req, res) => {
    BoardService().read(req, res)
})


export default app
