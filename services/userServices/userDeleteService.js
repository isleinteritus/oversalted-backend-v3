const userModel = require('../../models/userModel.js')
const forumModel = require('../../models/forumModel.js')
const commentModel = require('../../models/commentModel.js')

//It deletes the user however returns an error via controller each time.
// While successful it has nothing to return.

//Something to note is that the user may-be deleted however all submissions of the user will be rendered null until
// I make an account for The Kitchen Death God that we will apply all deleted accounts to that accounts handle.
//LOOK HERE: try adding return to await usersModel.
const userDeleteService = async (userId) => {
    const deletedReturnMessage = {deleted: "user's 86"}

    try{
        await userModel.findByIdAndRemove(userId)
        await forumModel.updateMany({},
            {
            forumOwner: null //todo make an admin account and assign all deletions to an account called "Kitchen Death God"
            })
        await commentModel.updateMany({},
            {
            commentOwner: null
            // todo make an admin account and assign all deletions to
            // an acct called 'Kitchen Death God'
                    })
        return null
    } catch(error) {
        throw Error("Error while deleting user. Location: userDeleteService")
    }
}

module.exports = {
    userDeleteService
}
