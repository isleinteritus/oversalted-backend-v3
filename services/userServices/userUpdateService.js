const userModel = require('../../models/userModel.js')

const userUpdateService = async (userId, userBody) => {
    try {
         await userModel.findByIdAndUpdate(userId,
             {
                 ...userBody
             })
         return userModel.findById(userId)
    } catch (error) {
        throw Error("Error while updating user. Location: userUpdateService")
    }
}

module.exports = {
    userUpdateService
}
