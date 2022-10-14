const userModel = require('../../models/userModel.js')

const userShowService = async (userID) => {
    try {
        return await userModel.findById(userID)
    } catch (error) {
        throw Error("Error while fetching user. Location: userShowService")
    }
}

module.exports = {
    userShowService
}
