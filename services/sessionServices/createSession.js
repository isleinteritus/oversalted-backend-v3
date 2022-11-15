//follow users.js line 36 v
//need login key to generate an id
//update user with loggin key
const userModel = require( '../../models/userModel' )
const { sessionKeyGen } = require( '../../utils/sessionKeyGen' )

const createSession = async( user, userSession ) => {
    const userId = user.id
    try {
        // const createdKey = await sessionKeyGen()
        //
        // await userModel.findByIdAndUpdate( userId, {
        //     $push: {
        //         sessionKey: createdKey
        //     }
        // } )
        userSession.sessionKey = userId.sessionKey
        
    }
    catch ( error ) {
    
    }
}

module.exports = {
    createSession
}
