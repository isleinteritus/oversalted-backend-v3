const forumModel = require('../../models/forumModel.js')
const userModel = require('../../models/userModel.js')

//scrub users name from everythingwithin the forum preserving the question and responses yet not the user.
const forumDeleteService = async (forumId) => {

    try {
        const {forumOwner} = await forumModel.findById(forumId)

        await userModel.findByIdAndUpdate(forumOwner,
            {
                $pull: {
                    userForums: {
                        $in: forumId
                    }
                }
            })
        //take the forum and scrub the forum published by clean by setting it to null
        await forumModel.findByIdAndUpdate(forumId,
            {
                forumOwner: null
            })

        return forumModel.findById(forumId)
    } catch(error) {
        throw Error(error)

    }
}

module.exports = {
    forumDeleteService
}
