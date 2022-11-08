const tagModel = require('../../models/tagModel.js')
const forumModel = require('../../models/forumModel.js')

const deleteTag = async (tagId) => {
    const deletedReturnMessage = {deleted: "Tag's 86"}
    try {
        const {taggedForums} = tagModel.findById(tagId)
        await tagModel.findByIdAndDelete(tagId)
        await forumModel.updateMany(taggedForums,
            {
                $pull: {
                    parentTags: {
                        $in: tagId
                    }
                }
            })
        return deletedReturnMessage
    }catch(error) {
        throw Error(error)
    }
}

module.exports = {
    deleteTag
}
