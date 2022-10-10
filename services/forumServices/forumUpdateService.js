const forumsModel = require('../../models/forumsModel.js')

const forumUpdateService = async (forumId) => {
    try {
        return await forumsModel.findByIdAndUpdate(
            forumId._id,
            {
                ...forumId
            }
            )
    } catch (error) {
        throw Error('Error while fetching user. Location: forumCreateService')
    }
}

module.exports = {
    forumUpdateService
}
