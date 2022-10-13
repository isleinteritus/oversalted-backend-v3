const forumsModel = require('../../models/forumModel.js')

const forumUpdateService = async (forumId, forumBody) => {
    try {
        await forumsModel.findByIdAndUpdate(
            forumId,
            {
                ...forumBody
            },(error) => {
                if (error) {
                    throw Error("Yo forumUpdateService broke while updating ya stuff.")
                }
            }
            )
        return forumsModel.findById(forumId)
    } catch (error) {
        throw Error("Error while fetching user. Location: forumCreateService")
    }
}

module.exports = {
    forumUpdateService
}
