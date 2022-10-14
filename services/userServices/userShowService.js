const userModel = require('../../models/userModel.js')

const userShowService = async (userId) => {
    try {
        return await userModel.findById(userId)
    } catch (error) {
        throw Error("Error while fetching user. Location: userShowService")
    }
}

module.exports = {
    userShowService
}
