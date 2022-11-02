const userModel = require('../../models/userModel.js')
const forumModel = require('../../models/forumModel.js')
const commentModel = require('../../models/commentModel.js')

//Note: The user may-be deleted however all submissions of the user will be rendered null until I make an account
// for the namespace: Kitchen Reaper, that will apply all deleted accounts to that accounts handle.

const userDeleteService = async (userId) => {
    const deletedReturnMessage = {deleted: "user's 86"}

    try{
        await userModel.findByIdAndRemove(userId)
        await forumModel.updateMany({},
            {
            forumOwner: null //todo make an admin account and assign all deletions to an account called "Kitchen Reaper"
            })
        await commentModel.updateMany({},
            {
            commentOwner: null
            // todo make an admin account and assign all deletions to
            // an acct called 'Kitchen Reaper'
                    })
        return null
    } catch(error) {
        throw Error("Error while deleting user. Location: userDeleteService")
    }
}

module.exports = {
    userDeleteService
}
