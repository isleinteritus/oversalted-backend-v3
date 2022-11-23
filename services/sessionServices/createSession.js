//follow users.js line 36 v
//need login key to generate an id
//update user with loggin key
const userModel = require( '../../models/userModel' )
const { sessionKeyGen } = require( '../../utils/sessionKeyGen' )

const createSession = async( foundUser, userSession ) => {
    const { id } = foundUser
    const createdKey = await sessionKeyGen()
    
    try {
        
        const addSessionKey = await userModel.findByIdAndUpdate( id, {
            $push: {
                sessionKey: createdKey
            }
        } )
        userSession.sessionKey = createdKey
        //TODO everythign works however json doesn't update yet database does. Nature of async?
        return addSessionKey
        
    }
    catch ( error ) {
    
    }
}

module.exports = {
    createSession
}
