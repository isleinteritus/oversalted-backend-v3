const forumModel = require( '../../models/forumModel.js' )
const userModel = require( '../../models/userModel.js' )
const { regenerateSession } = require( '../sessionServices/regenerateSession' )

//scrub users name from everything within the forum preserving the question and responses yet
// not the user.
const deleteForum = async( forumId, userSession ) => {
    
    try {
        const { forumOwner } = await forumModel.findById( forumId )
        
        await userModel.findByIdAndUpdate( forumOwner, {
            $pull: {
                userForums: {
                    $in: forumId
                }
            }
        } )
        //take the forum and scrub the forum published by clean by setting it to null
        await forumModel.findByIdAndUpdate( forumId, {
            forumOwner: null
        } )
        await regenerateSession( userSession )
        return forumModel.findById( forumId )
    }
    catch ( error ) {
        throw Error( error )
        
    }
}

module.exports = {
    deleteForum
}
