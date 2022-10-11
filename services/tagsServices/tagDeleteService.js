const tagModel = require('../../models/tagsModel.js')
const forumModel = require("../../models/forumsModel.js");

const tagDeleteService = (tagId) => {
    tagModel.findByIdAndDelete(
        tagId,
        (error, deletedTag) => {
            if (error) {
                console.error(error)
            } else {
                forumModel.updateMany({}, {
                    $pull: {
                        parentTags: {
                            $in: deletedTag._id
                        }
                    }
                }, (error, _updatedForumTag) => {
                    if (error) {
                        console.error(error)
                    }
                })
                return null
            }
        })
}

module.exports = {
    tagDeleteService
}
