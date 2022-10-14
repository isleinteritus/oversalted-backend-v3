const userModel = require('../../models/userModel.js')

const userUpdateService = async (userId, userBody) => {
    try {
         return await userModel.findByIdAndUpdate(userId, {
             ...userBody
         })
    } catch (error) {
        throw Error("Error while updating user. Location: userUpdateService")
    }
}

module.exports = {
    userUpdateService
}
