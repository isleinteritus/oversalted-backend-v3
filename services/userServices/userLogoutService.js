const userModel = require('../../models/userModel.js')

const userLogoutService = async (userInfo) => {
    try {
        return await userModel.findOne(userInfo)
    } catch (error) {
        throw Error("Error while logging out user. Location: userLogoutService")
    }
}

module.exports = {
    userLogoutService
}
