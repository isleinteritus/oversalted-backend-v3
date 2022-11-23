const commentModel = require( '../../models/commentModel.js' )
const { regenerateSession } = require( '../sessionServices/regenerateSession' )
const updateComment = async( commentId, commentBody, userSession ) => {
    try {
        await commentModel.findByIdAndUpdate( commentId, {
            ...commentBody
        } )
        await regenerateSession( userSession )
        return commentModel.findById( commentId )
    }
    catch ( error ) {
        throw Error( error )
    }
    
}

module.exports = {
    updateComment
}
