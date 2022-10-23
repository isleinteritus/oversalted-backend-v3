const tagModel = require('../../models/tagModel.js')
const forumModel = require('../../models/forumModel.js')

const tagDeleteService = async (tagId) => {
    try {
        await tagModel.findByIdAndDelete(tagId)
        await forumModel.updateMany({}, {
            $pull: {
                parentTags: {
                    $in: deletedTag._id
                }
            }
        })
                    return null
    }catch(error) {

    }
}

module.exports = {
    tagDeleteService
}
