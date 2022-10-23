const tagModel = require('../../models/tagModel.js')

const tagCreateService = async (tagBody) => {
    return tagModel.create(tagBody)
}

module.exports = {
    tagCreateService
}
