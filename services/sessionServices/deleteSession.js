//reference users.js line 66 v
const deleteSession = (variableName) => {
    try {
        const userModel = require('../../models/userModel')
        

        const deleteSession = (userLoggedIn, userSession) => {
            try {

                return userSession.sessionKey = userLoggedIn.sessionKey

            }catch (error) {

            }
        }

    }catch (error) {

    }
}
module.exports = {
    deleteSession
}
