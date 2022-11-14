const userModel = require( '../../models/userModel.js' )
const { sessionKeyGen } = require( '../../utils/sessionKeyGen' )

//doesn't work. Waiting on session implementation.
//may not need userBody due to userId being taken and found then passed to the next function
const logInUser = async( userId, userSession ) => {
    try {
        const foundUser = await userModel.findOne( userId )
        await userModel.updateOne( foundUser, {
            sessionKey: sessionKeyGen()
        } )
        
        return foundUser
    }
    catch ( error ) {
        throw Error( 'Error while logging in user. Location:userLogInService' )
    }
}

module.exports = {
    logInUser
}
