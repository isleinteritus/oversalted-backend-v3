const commentModel = require('../../models/commentModel.js')

const updateComment = async (commentId, commentBody) => {
    try {
        await commentModel.findByIdAndUpdate(
            commentId,
            {
                ...commentBody
            })
        return commentModel.findById(commentId)
    }catch(error){
         throw Error(error)
    }

}

module.exports = {
    updateComment
}
