const forumModel = require( '../../models/forumModel.js' )
const userModel = require( '../../models/userModel.js' )
const tagModel = require( '../../models/tagModel.js' )
const { regenerateSession } = require( '../sessionServices/regenerateSession' )

const createForum = async( forumBody, userSession ) => {
    const {
        forumOwner,
        parentTags
    } = forumBody
    
    try {
        const createdForum = await forumModel.create( [ forumBody ] )
        const newlyMadeForumId = createdForum[ 0 ]._id
        
        await userModel.findByIdAndUpdate( forumOwner, {
            $push: {
                userForums: newlyMadeForumId
            }
        } )
        
        await tagModel.updateMany( {
            _id: {
                $in: parentTags
            }
        }, {
            $push: {
                taggedForums: {
                    _id: newlyMadeForumId
                }
            }
        } )
        await regenerateSession( userSession )
        return createdForum
    }
    catch ( error ) {
        throw Error( error )
    }
}
module.exports = {
    createForum
}
