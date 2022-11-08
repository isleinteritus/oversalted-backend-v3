const userModel = require('../../models/userModel.js')

const updateUser = async (userId, userBody) => {
    try {
         await userModel.findByIdAndUpdate(userId,
             {
                 ...userBody
             })
         return userModel.findById(userId)
    } catch (error) {
        throw Error("Error while updating user. Location: uupdateUserUser")
    }
}

module.exports = {
    updateUser
}
