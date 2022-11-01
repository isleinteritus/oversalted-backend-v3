const forumModel = require('../../models/forumModel.js')

const forumShowService = async (forumId) => {
    try {
        const foundForum = await forumModel.findById(forumId)
        return foundForum
    }catch(error) {
        throw Error(error)

    }
}

module.exports = {
    forumShowService
}
