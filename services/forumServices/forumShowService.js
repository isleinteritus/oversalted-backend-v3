const forumModel = require('../../models/forumModel.js')

const forumShowService = async (forumId) => {
         await forumModel.findById(
            forumId,
            (error, foundForum) => {
                if (error) {
                    console.error(error)
                } else {
                    return foundForum
                }
            })
}

module.exports = {
    forumShowService
}
