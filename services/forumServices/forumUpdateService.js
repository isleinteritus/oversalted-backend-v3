const forumModel = require('../../models/forumModel.js')

const forumUpdateService = async (forumId, forumBody) => {
    try {
         await forumModel.findByIdAndUpdate(forumId,
            {
                ...forumBody
            })
        return forumModel.findById(forumId)
    }catch(error) {
        throw Error(error)

    }
}

module.exports = {
    forumUpdateService
}
