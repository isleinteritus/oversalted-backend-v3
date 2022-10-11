const commentModel = require('../../models/commentsModel.js')

const commentUpdateService = (commentId, commentBody) => {
        commentModel.findByIdAndUpdate(
            commentId,
            {
                ...commentBody
            }
            , (error, updatedComment) => {
                if (error) {
                    console.error(error)
                } else {
                    return null //change this later
                    }
                })
}

module.exports = {
    commentUpdateService
}
