const commentModel = require('../../models/commentModel.js')

const commentUpdateService = async (commentId, commentBody) => {
    try {
        await commentModel.findByIdAndUpdate(
            commentId,
            {
                ...commentBody
            })
    }catch(error){}

}

module.exports = {
    commentUpdateService
}
