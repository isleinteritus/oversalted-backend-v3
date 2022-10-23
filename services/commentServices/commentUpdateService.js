const commentModel = require('../../models/commentModel.js')

const commentUpdateService = async (commentId, commentBody) => {
        await commentModel.findByIdAndUpdate(
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
