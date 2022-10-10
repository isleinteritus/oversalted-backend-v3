const usersModel = require('../../models/usersModel')

const userLogoutService = async (userInfo) => {
    try {
        return await usersModel.findOne(userInfo)
    } catch (error) {
        throw Error('Error while logging out user. Location: userLogoutService')
    }
}

module.exports = {
    userLogoutService
}
