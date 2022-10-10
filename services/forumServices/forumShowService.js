const forumsModel = require('../../models/forumsModel')

const forumShowService = async (userID) => {
    try {
        const foundForum = await forumsModel.findById(userID)
        return foundforum
    } catch (error) {
        throw Error('Error while fetching user. Location: forumCreateService')
    }
}

module.exports = {
    forumShowService
}
