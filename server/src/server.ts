import express from 'express'
import mongoose from 'mongoose'
import usersRoutes from './routes/users'
import bodyParser from 'body-parser'
import cors from 'cors'
import { mongodbUrl } from './config'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/users', usersRoutes)

mongoose.connect(mongodbUrl).then(() => {
    console.log('connected to mongoDB')
    app.listen(5001, () => {
        console.log('Server is listening on 5001')
    })
})
