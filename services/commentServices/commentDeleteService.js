const commentModel = require('../../models/commentModel.js')
const userModel = require('../../models/userModel.js')
const forumModel = require('../../models/forumModel.js')

const commentDeleteService = async (commentId) => {
    try {
        await commentModel.findByIdAndDelete(
            commentId)
        await userModel.updateOne({}, {
            $pull: {
                userComments: {
                    $in: deletedComment._id
                }
            }
        })
        await forumModel.updateOne({}, {
            $pull: {
                comments: {
                    $in: deletedComment._id
                }
            }
        })
                    return null //this will eventually be fixed once I figure out how to handle delete routes in
                    // returning sucess message. As of right now it does its job.
    }catch(error){}

}

module.exports = {
    commentDeleteService
}
