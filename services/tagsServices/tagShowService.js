const tagModel = require('../../models/tagModel.js')

//it's odd that the error handling prevents a value from being returned.
const tagShowService = async (tagId) => {
    return tagModel.findById(tagId)
}

module.exports = {
    tagShowService
}
