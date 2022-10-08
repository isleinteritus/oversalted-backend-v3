const usersModel = require('../models/usersModel.js')

const userCreateService = async (userInput) => {
    try {
        const createdUser = await usersModel.create(userInput)
        return createdUser
    } catch (error) {
        throw Error('Error while creating user. Location: userCreateService')
    }
}

module.exports = {
   userCreateService
}
