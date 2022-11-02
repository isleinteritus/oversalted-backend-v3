const forumModel = require('../../models/forumModel.js')

const forumShowService = async (forumId) => {
    try {
        return await forumModel.findById(forumId)
    }catch(error) {
        throw Error(error)

    }
}

module.exports = {
    forumShowService
}
