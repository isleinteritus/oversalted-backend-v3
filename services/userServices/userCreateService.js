const userModel = require('../../models/userModel.js')

const userCreateService = async (userBody) => {
    try {
        return await userModel.create(userBody)
    } catch (error) {
        throw Error("Error while creating user. Location: userCreateService")
    }
}

module.exports = {
   userCreateService
}
