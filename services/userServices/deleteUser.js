const userModel = require( '../../models/userModel.js' )
const forumModel = require( '../../models/forumModel.js' )
const commentModel = require( '../../models/commentModel.js' )
const { deleteSession } = require( '../sessionServices/deleteSession' )
const deletedReturnMessage = { deleted: 'user\'s 86' }
//TODO The user may-be deleted however all submissions of the user will be rendered null until I
// make an account
// for the namespace: Kitchen Reaper, that will apply all deleted accounts to that accounts handle.

const deleteUser = async( userId, userSession ) => {
    
    try {
        await deleteSession( userId, userSession )
        await userModel.findByIdAndRemove( userId )
        await forumModel.updateMany( {}, {
            forumOwner: null //todo make an admin account and assign all deletions to an
                             // account called "Kitchen Reaper"
        } )
        await commentModel.updateMany( {}, {
            commentOwner: null
            // todo make an admin account and assign all deletions to
            // an acct called 'Kitchen Reaper'
        } )
        
        return deletedReturnMessage
    }
    catch ( error ) {
        throw Error( 'Error while deleting user. Location: deleteUserUser' )
    }
}

module.exports = {
    deleteUser
}
