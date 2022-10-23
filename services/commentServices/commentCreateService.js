const commentModel = require('../../models/commentModel.js')
const userModel = require('../../models/userModel.js')
const forumModel = require('../../models/forumModel.js')

const commentCreateService = async (commentBody) => {
    try {
        await commentModel.create(commentBody)
        await userModel.findByIdAndUpdate(
            createdComment.commentOwner,
            {
                $push: {
                    userComments: createdComment.id
                }
            })
        await forumModel.findByIdAndUpdate(createdComment.parentForum, {
            $push: {
                comments: createdComment.id
            }
        })
    }catch(error){}

}

module.exports = {
    commentCreateService
}
