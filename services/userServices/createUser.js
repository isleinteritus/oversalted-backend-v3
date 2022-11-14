const userModel = require( '../../models/userModel.js' )
const { sessionKeyGen } = require( '../../utils/sessionKeyGen' )

const createUser = async( userBody ) => {
    
    try {
        const createdUser = await userModel.create( [ userBody ] )
        //console.log( '1', createdUser[ 0 ]._id )
        
        const addSessionKey = await userModel.findByIdAndUpdate( createdUser[ 0 ]._id, {
            $push: {
                sessionKey: sessionKeyGen()
            }
        } )
        console.log( '2', createdUser )
        console.log( addSessionKey )
        return createdUser
    }
    catch ( error ) {
        throw Error( 'Error while creating user. Location: createUser' )
    }
}

module.exports = {
    createUser
}
