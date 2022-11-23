require( 'dotenv').config()

const { nanoid } = require( 'nanoid' )
const IN_PRODUCTION = process.env.NODE_ENV === 'production'

const sessionConfig = {

// session \\
    SESSION_OPTIONS: {
        secret: process.env.SESSION_SECRET,
        genid: ( req ) => {
            return nanoid()
        },
        name: process.env.SESSION_NAME,
        cookie: {
            maxAge: +process.env.SESSION_IDLE_TIMEOUT,
            secure: IN_PRODUCTION, //if true then transmit cookie over https
            httpOnly: IN_PRODUCTION, //if true: prevents client side JS from reading the cookie
            sameSite: true
        },
        rolling: true,
        resave: false, //if call is made and nothing is added, then we will not override session
        saveUninitialized: false //if you make a request to the server, and no data is stored to
        // the session then it will not be written to the database.
    }
}
module.exports = {
    sessionConfig
}
