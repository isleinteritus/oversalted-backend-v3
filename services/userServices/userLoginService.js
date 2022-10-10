const usersModel = require("../../models/usersModel");

const userLoginService = async (userInput) => {
    try {
        return await usersModel.findOne(userInput)
    } catch (error) {
        throw Error("Error while logging in user. Location:userLoginService")
    }
}

module.exports = {
    userLoginService
}
