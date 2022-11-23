const express = require( 'express' )
const router = express.Router()
const { sendStandardResponse } = require( '../utils/jsonResponseHelpers.js' )

//ROUTES
///////CREATE/////// //TODO doesn't return json. Creates the forum however it doesn't return the
// data from the service.At least res.json works. However it does return null.
router.post( '/create', async( req, res ) => {
    const { createForum } = require( '../services/forumServices/createForum.js' )
    
    try {
        const forumCreated = await createForum( req.body, req.session )
        
        res.json( sendStandardResponse( 200, 'Welcome to the Food-side', forumCreated ) )
    }
    catch ( error ) {
        res.json( {
            message: 'forum Controller create route',
            error: error
        } )
    }
} )
/////INDEX///////
// TODO: come back to this route when thinking about how to correlate with your tag system. Do we
// render forums by themself or do we render them by their tag? Another question would be: do we
// render the index by most recently submitted on a recent page or of some other forum? FYI route
// doesn't work. All I did was a general template of it and its service
router.get( '/index', async( req, res ) => {
    const { indexForums } = require( '../services/forumServices/indexForums.js' )
    try {
        const forumsIndexed = await indexForums()
        
        res.json( sendStandardResponse( 200, 'Forums Found', forumsIndexed ) )
    }
    catch ( error ) {
        res.json( {
            message: 'forumsController index route',
            error: error
        } )
    }
} )

///////SHOW///////
//forum id
router.get( '/:id', async( req, res ) => {
//finds specific id and shows it to user
    const { showForum } = require( '../services/forumServices/showForum.js' )
    
    try {
        const forumShown = await showForum( req.params.id )
        
        res.json( sendStandardResponse( 200, 'Forum has been located', forumShown ) )
    }
    catch ( error ) {
        res.json( {
            message: 'forum Controller show route',
            error: error
        } )
    }
} )

//UPDATE
//forum id
router.put( '/:id', async( req, res ) => {
    const { updateForum } = require( '../services/forumServices/updateForum.js' )
    
    try {
        const forumUpdated = await updateForum( req.params.id, req.body, req.session )
        
        res.json( sendStandardResponse( 200, 'Forum has been updated', forumUpdated ) )
    }
    catch ( error ) {
        res.json( {
            message: 'forumController update route',
            error: error
        } )
    }
} )

//DELETE
//forum id (╯°Д°)╯︵/(.□ . \)
//TODO: Small thought: how to handle how a user deletes their forum. The removal of the name or the
// name and content? Or just let them delete the whole thing. Still working out some loose ends
// here. Returns error yet delete user still. Not sure how to send the correct json response after
// user is deleted. Refer to forumDeleteService where logic is handled
router.delete( '/:id', async( req, res ) => {
    const { deleteForum } = require( '../services/forumServices/deleteForum.js' )
    
    try {
        const forumDeleted = await deleteForum( req.params.id )
        res.json( sendStandardResponse( 200, 'Forum has been located', forumDeleted ) )
    }
    catch ( error ) {
        res.json( {
            message: 'forum Controller delete route',
            error: error
        } )
    }
} )

module.exports = router
