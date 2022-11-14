//follow users.js line 36 v
//need login key to generate an id
//update user with loggin key
const userModel = require ( '../../models/userModel' )
const { nanoid } = require ( 'nanoid' )

const createSession = ( user, userSession ) => {
    try {
        
        return userSession.sessionKey = user.sessionKey
        
    }
    catch ( error ) {
        throw Error ( "Yo createSession derped, but I aint gonna say why" )
    }
}

module.exports = {
    createSession
}
