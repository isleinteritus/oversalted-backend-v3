const usersModel = require("../../models/usersModel");

const userLoginService = async (userInput) => {
    try {
        const loggedIn = await usersModel.findOne(userInput)
        return loggedIn
    } catch (error) {
        throw Error("Error while logging in user. Location:userLoginService")
    }
}

module.exports = {
    userLoginService
}
