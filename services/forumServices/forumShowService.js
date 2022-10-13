const forumsModel = require('../../models/forumModel.js')

const forumShowService = async (forumId) => {
    try {
        return await forumsModel.findById(
            forumId,
            (error, foundForum) => {
                if (error) {
                    console.error(error)
                } else {
                    return foundForum
                }
            })
    } catch (error) {
        throw Error("Error while fetching user. Location: forumCreateService")
    }
}

module.exports = {
    forumShowService
}
