const express = require('express')
const router = express.Router()
const {sendStandardResponse} = require('../utils/jsonResponseHelpers.js')

//ROUTES
///////CREATE///////
router.post ('/create', async (req, res) => {
    const {tagCreateService} = require('../services/tagsServices/tagCreateService.js')
    const tagBody = req.body
    try {
        const createdTag = await tagCreateService(tagBody)
        res.json(sendStandardResponse(200, "Welcome to the Food-side", createdTag))

    } catch(error) {
        res.json({message:"tagController create route",
            error: error})
    }
})

///////INDEX///////
//doesn't work. :P Will get to it when ready to figure out the index issues.
router.get('/index', async (req, res)=> {
    const {tagIndexService} = require('../services/forumServices/forumIndexService.js')
    try {
        const tagsFound = await tagIndexService()

        res.json(sendStandardResponse(200, "Forums Found", tagsFound))
    } catch (error) {
        res.json({message:"forumsController index route",
            error: error})
    }
})

///////SHOW///////
//tag id
router.get('/:id', async (req, res) => {
    const {tagShowService} = require('../services/TagServices/tagShowService.js')
    const tagId = req.params.id

    try {
        const showTag = await tagShowService(tagId)

        res.json(sendStandardResponse(200, "Tag has been deleted", showTag))
    } catch (error) {
        res.json({message:"tagController delete route",
            error: error})
    }

})

//UPDATE
//tag id
router.put('/:id', async (req, res) => {
    const {tagUpdateService} = require('../services/TagServices/tagUpdateService.js')
    const tagId = req.params.id

    try {
        const updatedTag = await tagUpdateService(tagId)

        res.json(sendStandardResponse(200, "Tag has been deleted", updatedTag))
    } catch (error) {
        res.json({message:"tagController delete route",
            error: error})
    }

})
//potential edge cases of having one tag only in the forum. All forums require >=1 tag
router.delete('/:id', async (req, res) => {
    const {tagDeleteService} = require('../services/TagServices/tagDeleteService.js')
    const tagId = req.params.id

    try {
        const deletedTag = await tagDeleteService(tagId)

        res.json(sendStandardResponse(200, "Tag has been deleted", deletedTag))
    } catch (error) {
        res.json({message:"tagController delete route",
            error: error})
    }
})

module.exports = router
