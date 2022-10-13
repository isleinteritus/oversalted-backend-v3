const usersModel = require('../../models/userModel.js')

const userCreateService = async (userInput) => {
    try {
        return await usersModel.create(userInput)
    } catch (error) {
        throw Error("Error while creating user. Location: userCreateService")
    }
}

module.exports = {
   userCreateService
}
