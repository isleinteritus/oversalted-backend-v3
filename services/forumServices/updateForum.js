const forumModel = require( '../../models/forumModel.js' )
const { regenerateSession } = require( '../sessionServices/regenerateSession' )

const updateForum = async( forumId, forumBody, userSession ) => {
    try {
        await forumModel.findByIdAndUpdate( forumId,
            {
                ...forumBody
            }
        )
        await regenerateSession( userSession )
        return forumModel.findById( forumId )
    }
    catch ( error ) {
        throw Error( error )
        
    }
}

module.exports = {
    updateForum
}
