const userModel = require( '../../models/userModel.js' )
const { createSession } = require( '../sessionServices/createSession' )

//doesn't work. Waiting on session implementation.
//may not need userBody due to userId being taken and found then passed to the next function
const logInUser = async( userBody, userSession ) => {
    try {
        
        const foundUser = await userModel.findOne( userBody )
        
        return await createSession( foundUser, userSession )
        
    }
    catch ( error ) {
        throw Error( 'Error while logging in user. Location:userLogInService' )
    }
}

module.exports = {
    logInUser
}
