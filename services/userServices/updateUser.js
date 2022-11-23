const userModel = require( '../../models/userModel.js' )
const { regenerateSession } = require( '../sessionServices/regenerateSession' )

const updateUser = async( userId, userBody, userSession ) => {
    try {
        await userModel.findByIdAndUpdate( userId, {
            ...userBody
        } )
        await regenerateSession( userSession )
        return userModel.findById( userId )
    }
    catch ( error ) {
        throw Error( 'Error while updating user. Location: uupdateUserUser' )
    }
}

module.exports = {
    updateUser
}
