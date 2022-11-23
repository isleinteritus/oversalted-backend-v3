const forumModel = require( '../../models/forumModel.js' )

const showForum = async( forumId ) => {
    try {
        return await forumModel.findById( forumId )
    }
    catch ( error ) {
        throw Error( error )
        
    }
}

module.exports = {
    showForum
}
