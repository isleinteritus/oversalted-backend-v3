const forumModel = require('../../models/forumModel.js')

const forumUpdateService = async (forumId, forumBody) => {
        await forumModel.findByIdAndUpdate(
            forumId,
            {
                ...forumBody
            }, (error) => {
                if (error) {
                    throw Error("Yo forumUpdateService broke while updating ya stuff.")
                }
            })
        return forumModel.findById(forumId)
}

module.exports = {
    forumUpdateService
}
