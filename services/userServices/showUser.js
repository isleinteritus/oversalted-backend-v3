const userModel = require('../../models/userModel.js')

const showUser = async (userId) => {
    try {
        return await userModel.findById(userId)
    } catch (error) {
        throw Error("Error while fetching user. Location: sshowUserUser")
    }
}

module.exports = {
    showUser
}
