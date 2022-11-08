// Dependencies \\
require('dotenv').config()
const config = require('./configs/databasesConfig.js') //TODO add config logic as needed. Config file made.
const APP_PORT = process.env.APP_PORT
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
const methodOverride = require('method-override')
const cors = require('cors')
const redisSession = require('./middlewares/sessionManagement/redisSession.js')

//controller assignment here\\
const usersController = require('./controllers/usersController.js')
const tagsController = require('./controllers/tagsController.js')
const forumsController = require('./controllers/forumsController.js')
const commentsController = require('./controllers/commentsController.js')

//DB connection\\
mongoose.connect(
	config.MONGODB_URI,
	config.MONGODB_OPTIONS
)

// DB checks&&success \\
db.on("error", (err) => console.log(err.message + "Is mongodb not running?"))
db.on("connected", ()=> console.log("Your mongodb has connected"))
db.on("disconnected", ()=> console.log("Your mongodb has disconnected"))

//Middlewares\\
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//I don't think I need this since the above line is extended to true instead of false
app.use(methodOverride('_method'))

app.use(redisSession)

app.use('/user', usersController)
app.use('/forum', forumsController)
app.use('/comment', commentsController)
app.use('/tag', tagsController)

app.listen(APP_PORT, ()=>{
	console.log(`Listening on port ${APP_PORT}`)
})
