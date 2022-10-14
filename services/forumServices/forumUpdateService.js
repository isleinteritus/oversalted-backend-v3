const forumModel = require('../../models/forumModel.js')

const forumUpdateService = async (forumId, forumBody) => {
    try {
        await forumModel.findByIdAndUpdate(
            forumId,
            {
                ...forumBody
            },(error) => {
                if (error) {
                    throw Error("Yo forumUpdateService broke while updating ya stuff.")
                }
            }
            )
        return forumModel.findById(forumId)
    } catch (error) {
        throw Error("Error while fetching user. Location: forumCreateService")
    }
}

module.exports = {
    forumUpdateService
}
