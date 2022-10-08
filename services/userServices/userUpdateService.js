const usersModel = require('../../models/usersModel')

const userUpdateService = async (userIDAndInfo) => {
    try {
        const updatedUser = await usersModel.findByIdAndUpdate(userIDAndInfo)
        return updatedUser
    } catch (error) {
        throw Error('Error while updatnig user. Location: userUpdateService')
    }
}

module.exports = {
    userUpdateService
}
