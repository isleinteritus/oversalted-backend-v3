const commentModel = require('../../models/commentModel.js')
const userModel = require('../../models/userModel.js')
const forumModel = require('../../models/forumModel.js')

const commentCreateService = async (commentBody) => {
    const {commentOwner, parentForum} = commentBody
    let newlyMadeCommentId;
    try {
        const createdComment = await commentModel.create([commentBody])
        newlyMadeCommentId = createdComment[0]._id

        await userModel.findByIdAndUpdate(commentOwner,
            {
                $push: {
                    userComments: newlyMadeCommentId
                }
            })

        await forumModel.findByIdAndUpdate(parentForum,
            {
                $push: {
                    comments: newlyMadeCommentId
                }
            })
        return createdComment
    }catch(error){
        throw Error(error)
    }

}

module.exports = {
    commentCreateService
}
