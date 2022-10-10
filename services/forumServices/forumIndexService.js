const forumsModel = require('../../models/forumsModel')

const forumIndexService = async (userID) => {
    try {
        const foundForums = await forumsModel.findById(userID)
        return foundforums
    } catch (error) {
        throw Error('Error while fetching user. Location: forumIndexService')
    }
}

module.exports = {
    forumIndexService
}
