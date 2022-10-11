const tagModel = require('../../models/tagsModel.js')

const tagCreateService = async (tagBody) => {
    return tagModel.create(tagBody)
}

module.exports = {
    tagCreateService
}
