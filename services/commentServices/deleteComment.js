const commentModel = require('../../models/commentModel.js')
const userModel = require('../../models/userModel.js')
const forumModel = require('../../models/forumModel.js')

const deleteComment = async (commentId) => {
    const deletedReturnMessage = {deleted: "Comment's 86"}
    try {
        const {commentOwner, parentForum} = await commentModel.findById(commentId)

        await commentModel.findByIdAndDelete(commentId)

        await userModel.findByIdAndUpdate(commentOwner,
            {
                $pull: {
                    userComments: {
                        $in: commentId
                    }
                }
            })
        await forumModel.findByIdAndUpdate(parentForum,
            {
                $pull: {
                    forumComments: {
                        $in: commentId
                    }
                }
            })
        return deletedReturnMessage

    }catch(error){
        throw Error(error)
    }

}

module.exports = {
    deleteComment
}
