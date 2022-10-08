const usersModel = require('../models/usersModel.js')

const userShowService = async (userID) => {
    try {
        const foundUser = await usersModel.findById(userID)
        return foundUser
    } catch (error) {
        throw Error('Error while fetching user. Location: userShowService')
    }
}

module.exports = {
    userShowService
}
