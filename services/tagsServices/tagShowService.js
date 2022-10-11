const tagModel = require('../../models/tagsModel.js')
//its odd that the error handling prevents a value from being returned.
const tagShowService = (tagId) => {
    return tagModel.findById(tagId)
}

module.exports = {
    tagShowService
}
