const userModel = require('../../models/userModel.js')

const userLoginService = async (userId) => {
    try {
        return await userModel.findOne(userId)
    } catch (error) {
        throw Error("Error while logging in user. Location:userLoginService")
    }
}

module.exports = {
    userLoginService
}
