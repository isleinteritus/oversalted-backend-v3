//when user logs in
//whenever user updates their personal information regenerate session.
//when a user posts/updates/deletes regenerate session.

const regenerateSession = async( userSession ) => {
    
    try {
        
        await userSession.regenerate( function( error ) {
            console.log( error )
        } )
    }
    catch ( error ) {
        throw Error( 'Error while regenerating session. Location: regenerateSession' )
    }
}
module.exports = {
    regenerateSession
}
