const express = require( 'express' )
const router = express.Router()
const { sendStandardResponse } = require( '../utils/jsonResponseHelpers.js' )


//ROUTES

///////CREATE USER///////
router.post( '/create', async( req, res ) => {
    const { createUser } = require( '../services/userServices/createUser.js' )
    const { createSession } = require( '../services/sessionServices/createSession' )
    const userBody = req.body //users name email password
    const userSession = req.session
    
    try {
        
        const createdUser = await createUser( userBody )
        
        await createSession( createdUser, userSession )
        
        res.json( sendStandardResponse( 200, 'Welcome to the Food-side', createdUser ) )
    }
    catch ( error ) {
        res.json( {
            message: 'userController register route',
            error:   error
        } )
    }
} )

//login user
router.post( '/login', async( req, res ) => {
    const { logInUser } = require( '../services/userServices/logInUser.js' )
    const { createSession } = require( '../services/sessionServices/createSession' )
    const userId = req.body.id
    const userSession = req.session
    
    try {
        const foundUser = await logInUser( userId )
        
        const createdSession = await createSession( foundUser, userSession )
        
        res.json( sendStandardResponse( 200, 'You\'re logged in!', foundUser ) )
    }
    catch ( error ) {
        res.json( {
            message: 'user Controller login route',
            error:   error
        } )
    }
} )

//logout user
//todo requires sessions to make sense.
router.post( '/logout', async( req, res ) => {
    const { logOutUser } = require( '../services/userServices/logOutUser.js' )
    const userId = req.params.id
    const userBody = req.body //this will change to sessions w/ redis
    let userSession = req.session
    
    try {
        const userLoggedOut = await logOutUser( userId, userBody )
        
        res.json( sendStandardResponse( 200, 'Bye bye forever', userLoggedOut ) )
    }
    catch ( error ) {
        res.json( {
            message: 'userController logout route',
            error:   error
        } )
    }
    
} )

///////SHOW///////
//user id
router.get( '/:id', async( req, res ) => {
    //finds specific id and shows it to user
    const { showUser } = require( '../services/userServices/showUser.js' )
    const userId = req.params.id
    
    try {
        const foundUser = await showUser( userId )
        
        res.json( sendStandardResponse( 200, 'User has been located', foundUser ) )
    }
    catch ( error ) {
        res.json( {
            message: 'userController show route',
            error:   error
        } )
    }
} )

//UPDATE
//user id
router.put( '/:id', async( req, res ) => {
    const { updateUser } = require( '../services/userServices/updateUser.js' )
    const userId = req.params.id //users name email password & id
    const userBody = req.body
    
    try {
        const updatedUser = await updateUser( userId, userBody )
        
        res.json( sendStandardResponse( 200, 'User has been updated', updatedUser ) )
    }
    catch ( error ) {
        res.json( {
            message: 'userController update route',
            error:   error
        } )
    }
} )

//DELETE
//user ID
//Still working out some loose ends here. Returns error yet delete user still. Not sure how to send
// the correct json response after user is deleted. Deletion logic is in
// services/userDeleteServices.js
router.delete( '/:id', async( req, res ) => {
    const { deleteUser } = require( '../services/userServices/deleteUser.js' )
    const userId = req.params.id //users ID
    
    try {
        const userDeleted = await deleteUser( userId )
        
        res.json( sendStandardResponse( 200, 'The Kitchen Death-God takes another', userDeleted ) )
    }
    catch ( error ) {
        res.json( {
            message: 'userController delete route',
            error:   error
        } )
    }
} )

module.exports = router
