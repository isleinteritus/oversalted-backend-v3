const userModel = require('../../models/userModel.js')

//doesn't work. Waiting on session implementation.
const logOutUser = async (userId) => {
    try {
        return await userModel.findOne(userId)
    } catch (error) {
        throw Error("Error while logging out user. Location: llogOutUser.js")
    }
}

module.exports = {
    logOutUser
}
