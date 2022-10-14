const userModel = require('../../models/userModel.js')

const userUpdateService = async (userIDAndInfo) => {
    try {
         return await userModel.findByIdAndUpdate(userIDAndInfo)
    } catch (error) {
        throw Error("Error while updating user. Location: userUpdateService")
    }
}

module.exports = {
    userUpdateService
}
