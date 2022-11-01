const tagModel = require('../../models/tagModel.js')
const forumModel = require('../../models/forumModel.js')

const tagDeleteService = async (tagId) => {
    const deletedReturnMessage = {deleted: "Tag's 86"}
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
        throw Error(error)
    }
}

module.exports = {
    tagDeleteService
}
