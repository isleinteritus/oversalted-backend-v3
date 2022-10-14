const userModel = require('../../models/userModel.js')

const userLogoutService = async (userId) => {
    try {
        return await userModel.findOne(userId)
    } catch (error) {
        throw Error("Error while logging out user. Location: userLogoutService")
    }
}

module.exports = {
    userLogoutService
}
