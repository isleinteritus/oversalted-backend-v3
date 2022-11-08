const express = require('express')
const router = express.Router()
const {sendStandardResponse} = require('../utils/jsonResponseHelpers.js')

//ROUTES
///////CREATE///////
router.post ('/create', async (req, res) => {
    const {createTag} = require('../services/tagServices/createTag.js')
    const tagBody = req.body
    try {
        const tagCreated = await createTag(tagBody)
        res.json(sendStandardResponse(200, "Welcome to the Food-side", tagCreated))

    } catch(error) {
        res.json({message:"tags Controller create route",
            error: error})
    }
})

///////INDEX///////
//doesn't work. :P Will get to it when ready to figure out the index issues.
router.get('/index', async (req, res)=> {
    const {indexTag} = require('../services/forumServices/indexForums.js')
    try {
        const tagIndexed = await indexTag()

        res.json(sendStandardResponse(200, "Forums Found", tagIndexed))
    } catch (error) {
        res.json({message:"tags Controller index route",
            error: error})
    }
})

///////SHOW///////
//tag id
router.get('/:id', async (req, res) => {
    const {showTag} = require('../services/tagServices/showTag.js')
    const tagId = req.params.id

    try {
        const tagShown = await showTag(tagId)

        res.json(sendStandardResponse(200, "Tag has been deleted", tagShown))
    } catch (error) {
        res.json({message:"tag Controller delete route",
            error: error})
    }

})

//UPDATE
//tag id
router.put('/:id', async (req, res) => {
    const {updateTag} = require('../services/tagServices/updateTag.js')
    const tagId = req.params.id
    const tagBody = req.body

    try {
        const tagUpdated = await updateTag(tagId, tagBody)

        res.json(sendStandardResponse(200, "Tag has been deleted", tagUpdated))
    } catch (error) {
        res.json({message:"tag Controller delete route",
            error: error})
    }

})
//potential edge cases of having one tag only in the forum. All forums require >=1 tag
router.delete('/:id', async (req, res) => {
    const {deleteTag} = require('../services/tagServices/deleteTag.js')
    const tagId = req.params.id

    try {
        const tagDeleted = await deleteTag(tagId)

        res.json(sendStandardResponse(200, "Tag has been deleted", tagDeleted))
    } catch (error) {
        res.json({message:"tagController delete route",
            error: error})
    }
})

module.exports = router
