const express = require('express')
const router = express.Router()
const {sendStandardResponse} = require('../utils/jsonResponseHelpers.js')


//ROUTES
///////CREATE/////// //TODO doesn't return json. Creates the forum however it doesn't return the data from the
// service.At least res.json works. However it does return null.
router.post ('/create', async (req, res) => {
    const {forumCreateService} = require('../services/forumServices/forumCreateService.js')
	const forumBody = req.body
    try {
        const createdForum = await forumCreateService(forumBody)
        //returns undefined
        console.log("forumsCreateController is", createdForum)
        res.json(sendStandardResponse(200, "Welcome to the Food-side", createdForum))
    } catch(error) {
    res.json({message: "forumController create route",
    error: error})
    }
})
/////INDEX///////
// TODO: come back to this route when thinking about how to correlate with your tag system. Do we render forums by
//  themself or do we render them by their tag? Another question would be: do we render the index by most recently
//  submitted on a recent page or of some other forum?
//FYI route doesn't work. All I did was a general template of it and its service
router.get('/index', async (req, res)=> {
    const {forumIndexService} = require('../services/forumServices/forumIndexService.js')
    try {
        const forumsFound = await forumIndexService()

        res.json(sendStandardResponse(200, "Forums Found", forumsFound))
    } catch (error) {
        res.json({message:"forumsController index route",
            error: error})
    }
})

///////SHOW///////
//forum id
router.get('/:id', async (req, res) => {
//finds specific id and shows it to user
    const {forumShowService} = require('../services/forumServices/forumShowService.js')
    const forumID = req.params.id

    try {
        const foundForum = await forumShowService(forumID)

        res.json(sendStandardResponse(200, "Forum has been located", foundForum))
    } catch(error) {
        res.json({message:"forumController show route",
            error: error})
    }
})

//UPDATE
//forum id
router.put('/:id', async (req,res) => {
    const {forumUpdateService} = require('../services/forumServices/forumUpdateService.js')
    const forumID = req.params.id
    const forumBody = req.body

    try {
        const foundForum = await forumUpdateService(forumID, forumBody)

        res.json(sendStandardResponse(200, "Forum has been updated", foundForum))
    } catch(error) {
        res.json({message:"forumController update route",
            error: error})
    }
})

//DELETE
//forum id (╯°Д°)╯︵/(.□ . \)
//TODO: Small thought: how to handle how a user deletes their forum. The removal of the name or the name and
// content? Or just let them delete the whole thing.
//Still working out some loose ends here. Returns error yet delete user still. Not sure how to send the correct
// json response after user is deleted. Refer to forumDeleteService where logic is handled
router.delete('/:id', async (req,res) => {
    const {forumDeleteService} = require('../services/forumServices/forumDeleteService.js')
    const forumID = req.params.id

    try {
        const deleteForum = await forumDeleteService(forumID)
        res.json(sendStandardResponse(200, "Forum has been located", deleteForum))
    } catch(error) {
        res.json({message:"forumController delete route",
            error: error})
    }
})

module.exports = router
