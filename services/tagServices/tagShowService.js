const tagModel = require('../../models/tagModel.js')

//it's odd that the error handling prevents a value from being returned.
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
