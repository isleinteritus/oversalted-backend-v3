const forumsModel = require('../../models/forumsModel.js')
const usersModel = require("../../models/usersModel.js")
const commentsModel = require("../../models/commentsModel.js")
const tagsModel = require("../../models/tagsModel.js")

const forumDeleteService = async (forumId) => {
    try {
        await forumsModel.findByIdAndDelete(
            forumId,
            (error, deletedForum) => {
                if (error) {
                    console.error(error)
                } else {
                    usersModel.updateMany({}, {
                        $pull: {
                            userForums: {
                                $in: deletedForum._id
                            }
                        }
                    }, (error, _updatedUser) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                    usersModel.updateMany({}, {
                        $pull: {
                            userComments: {
                                $in: deletedForum.comments
                            }
                        }
                    }, (error, _updatedUser) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                    commentsModel.deleteMany({
                        _id: {
                            $in: deletedForum.comments
                        }
                    }, (error, _deletedComment) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                    tagsModel.updateMany({}, {
                        $pull: {
                            taggedForums: {
                                $in: deletedForum._id
                            }
                        }
                    }, (error, _updatedTag) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                    //TODO WHAT CAN I RETURN HERE? D:
                    return null
                }
            })
    } catch (error) {
        throw Error('Error while fetching user. Location: forumCreateService')
    }
}

module.exports = {
    forumDeleteService
}
