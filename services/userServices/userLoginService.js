const userModel = require('../../models/userModel.js')

//doesn't work. Waiting on session implementation.
const userLogInService = async (userId) => {
    try {
        return await userModel.findOne(userId)
    } catch (error) {
        throw Error("Error while logging in user. Location:userLogInService")
    }
}

module.exports = {
    userLogInService
}
