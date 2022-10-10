const forumsModel = require('../../models/forumsModel.js')
const usersModel = require('../../models/usersModel.js')
const tagsModel = require('../../models/tagsModel.js')

const forumCreateService = async (forumData) => {
    try {
        const createdForum = await forumsModel.create(forumData, (error, createForum) => {
            if (error) {
                console.error(error)
            } else {
                usersModel.findByIdAndUpdate(createForum.forumOwner, {
                    $push: {
                        userForums: createForum._id
                        }
                    }, (error, _updatedUserForum) => {
                        if (error) {
                            console.error(error)
                        }
                    }
                )

                tagsModel.updateMany({
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
        return forumsModel.findById(createdForum) //returns as null
    } catch(error) {
        throw Error('Error while fetching user. Location: forumCreateService')
    }
}

module.exports = {
    forumCreateService
}
