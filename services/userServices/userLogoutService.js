const usersModel = require('../../models/usersModel')

const userLogoutService = async (userInfo) => {
    try {
        const loggedOut = await usersModel.findOne(userInfo)
        return loggedOut
    } catch (error) {
        throw Error('Error while logging out user. Location: userLogoutService')
    }
}

module.exports = {
    userLogoutService
}
