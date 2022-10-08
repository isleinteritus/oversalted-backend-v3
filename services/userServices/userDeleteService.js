const usersModel = require('../../models/usersModel')
const forumsModel = require("../../models/forumsModel")
const commentsModel = require("../../models/commentsModel")

//It deletes the user however returns an error via controller each time.
// While successful it has nothing to return.

//Something to note is that the user may-be deleted however all submissions of the user will be rendered null until
// I make an account for The Kitchen Death God that we will apply all deleted accounts to that accounts handle.
const userDeleteService = async (userID) => {
    try{
        const deleteUser = await usersModel.findByIdAndRemove(
            userID,
            (error, _deletedUser) => {
                if (error) {
                    console.error(error)
                } else {
                    forumsModel.updateMany({}, {
                        forumOwner: null //todo make an admin account and assign all deletions to an account called "Kitchen Death God"
                    }, (error, _deletedForum) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                    commentsModel.updateMany({}, {
                        commentOwner: null // todo make an admin account and assign all deletions to
                        // an acct called "Kitchen Death God"
                    }, (error, _deletedComment) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                }
            })
        return deleteUser
    } catch(error) {
        throw Error('Error while deleting user. Location: userDeleteService')
    }
}

module.exports = {
    userDeleteService
}
