const userModel = require( '../../models/userModel.js' )
const { deleteSession } = require( '../sessionServices/deleteSession' )

//doesn't work. Waiting on session implementation.
const logOutUser = async( userBody, userSession ) => {
    try {
        const foundUser = await userModel.findOne( userBody )
        await deleteSession( foundUser, userSession )
        return { message: 'User logged out' }
    }
    catch ( error ) {
        throw Error( 'Error while logging out user. Location: llogOutUser.js' )
    }
}

module.exports = {
    logOutUser
}
