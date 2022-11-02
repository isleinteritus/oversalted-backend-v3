const tagModel = require('../../models/tagModel.js')

const tagShowService = async (tagId) => {
    try {
        return await tagModel.findById(tagId)
    }catch(error) {
        throw Error(error)
    }
}

module.exports = {
    tagShowService
}
