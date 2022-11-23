const userModel = require( '../../models/userModel' )
const deleteSession = async( foundUser, userSession ) => {
    const {
        id,
        sessionKey
    } = foundUser
    
    try {
        userSession.destroy()
        const test = await userModel.findByIdAndUpdate( id, {
            $pullAll: {
                sessionKey
            }
        } )
        
        return test
    }
    catch ( error ) {
    
    }
}
module.exports = {
    deleteSession
}
