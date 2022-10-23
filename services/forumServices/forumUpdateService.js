const forumModel = require('../../models/forumModel.js')

const forumUpdateService = async (forumId, forumBody) => {
    try {
        const updatedBody = await forumModel.findByIdAndUpdate(
            forumId,
            {
                ...forumBody
            })
        return forumModel.findById(forumId)
    }catch(error) {

    }
}

module.exports = {
    forumUpdateService
}
