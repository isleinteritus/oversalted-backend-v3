const forumModel = require('../../models/forumModel.js')
const userModel = require('../../models/userModel.js')
const tagModel = require('../../models/tagModel.js')

const forumCreateService = async (forumData) => {
    try {
        const createdForum = await forumModel.create(forumData, (error, createForum) => {
            if (error) {
                console.error(error)
            } else {
                userModel.findByIdAndUpdate(createForum.forumOwner, {
                    $push: {
                        userForums: createForum._id
                        }
                    }, (error, _updatedUserForum) => {
                        if (error) {
                            console.error(error)
                        }
                    }
                )

                tagModel.updateMany({
                    _id: {
                        $in: createForum.parentTags
                        }
                    },
                    {
                        $push: {
                            taggedForums: {
                                _id: createForum._id
                            }
                        }
                    }, (error, _updatedTags) => {
                        if (error) {
                            console.error(error)
                        }
                    }
                )
                //TODO object data is shown here however once outside of this inner block it returns undefined as it
                // does
                // in the forumsController. Why is it only here that the data shows?
                //console.log("inner block createForum id is", createForum._id)
                return createForum._id
            }
        })
        console.log("forumCreateService: outside createdForum block", createdForum)
        return forumModel.findById(createdForum) //returns as null
    } catch(error) {
        throw Error('Error while fetching user. Location: forumCreateService')
    }
}

module.exports = {
    forumCreateService
}
