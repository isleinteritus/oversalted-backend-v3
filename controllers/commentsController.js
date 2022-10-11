const express = require('express')
const router = express.Router()
const {sendStandardResponse} = require("../utils/jsonResponseHelpers");


//ROUTES
///////CREATE///////
router.post ('/create', async (req, res) => {
    const { commentCreateService } = require('../services/commentServices/commentCreateService.js')
    const userInput = req.body

    try {
        const createdComment = await commentCreateService(userInput)
    //returns null but still works
        res.json(sendStandardResponse(200, "Welcome to the Food-side", createdComment))
    } catch(error) {
        res.json({message:"commentController create route",
            error: error})
    }
})
///////INDEX///////
//comment ID
//TODO not sure how to set this up in correlation to index related comments to x forum. Well, I suppose that
// statement says how to do it.
//As of right now this doesn't work. Will return to it.
router.get('/index', async (req, res)=> {
    const { commentIndexService } = require('../services/commentServices/commentIndexService.js')
    const forumId = req.params.id
    try {
        const indexComments = await commentIndexService(forumId)

        res.json(sendStandardResponse(200, "Welcome to the Food-side", indexComments))
    } catch(error) {
        res.json({message:"commentController index route",
            error: error})
    }
})

//UPDATE
//comment id
router.put('/:id', async (req, res) => {
    const { commentUpdateService } = require('../services/commentServices/commentUpdateService.js')
    const commentId = req.params.id
    const commentBody = req.body

    try {
        const updatedComment = await commentUpdateService(commentId, commentBody)

        res.json(sendStandardResponse(200, "Welcome to the Food-side", updatedComment))
    } catch(error) {
        res.json({message:"commentController create route",
            error: error})
    }
})

//DELETE
//comment id
router.delete('/:id', async (req,res) => {
    const { commentDeleteService } = require('../services/commentServices/commentDeleteService.js')
    const commentId = req.params.id

    try {
        const deletedComment = await commentDeleteService(commentId)

        res.json(sendStandardResponse(200, "Welcome to the Food-side", deletedComment))
    } catch(error) {
        res.json({message:"commentController delete route",
            error: error})
    }

})

module.exports = router
