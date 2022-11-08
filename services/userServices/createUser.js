const userModel = require('../../models/userModel.js')

const createUser = async (userBody) => {
    try {
        return await userModel.create(userBody)
    } catch (error) {
        throw Error("Error while creating user. Location: createUser")
    }
}

module.exports = {
   createUser
}
