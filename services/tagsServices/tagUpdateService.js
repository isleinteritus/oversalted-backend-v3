const tagModel = require('../../models/tagModel.js')

const tagUpdateService = (tagId, tagBody) => {
    tagModel.findByIdAndUpdate(
        tagId,
        {
            ...tagBody
        },
        (error) => {
            if (error) {
                console.error(error)
            }
        })
    return tagModel.findById(tagId)
}

module.exports = {
    tagUpdateService
}
