const userModel = require('../../models/userModel.js')

const userLoginService = async (userInput) => {
    try {
        return await userModel.findOne(userInput)
    } catch (error) {
        throw Error("Error while logging in user. Location:userLoginService")
    }
}

module.exports = {
    userLoginService
}
