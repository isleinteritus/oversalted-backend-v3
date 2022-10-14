const forumModel = require('../../models/forumModel.js')
const userModel = require('../../models/userModel.js')
const commentModel = require('../../models/commentModel.js')
const tagModel = require('../../models/tagModel.js')

const forumDeleteService = async (forumId) => {
    try {
        await forumModel.findByIdAndDelete(
            forumId,
            (error, deletedForum) => {
                if (error) {
                    console.error(error)
                } else {
                    userModel.updateMany({}, {
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
                    userModel.updateMany({}, {
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
                    commentModel.deleteMany({
                        _id: {
                            $in: deletedForum.comments
                        }
                    }, (error, _deletedComment) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                    tagModel.updateMany({}, {
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
