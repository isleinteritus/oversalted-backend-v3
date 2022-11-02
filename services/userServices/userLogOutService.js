const userModel = require('../../models/userModel.js')

//doesn't work. Waiting on session implementation.
const userLogOutService = async (userId) => {
    try {
        return await userModel.findOne(userId)
    } catch (error) {
        throw Error("Error while logging out user. Location: userLogOutService")
    }
}

module.exports = {
    userLogOutService
}
