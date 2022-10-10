const usersModel = require('../../models/usersModel')

const userUpdateService = async (userIDAndInfo) => {
    try {
         return await usersModel.findByIdAndUpdate(userIDAndInfo)
    } catch (error) {
        throw Error('Error while updating user. Location: userUpdateService')
    }
}

module.exports = {
    userUpdateService
}
