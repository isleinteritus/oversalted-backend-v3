const express = require('express')
const router = express.Router()
const {sendStandardResponse} = require('../utils/jsonResponseHelpers.js');


//ROUTES
///////CREATE///////
router.post('/create', async (req, res) => {
    const { createComment } = require('../services/commentServices/createComment.js')
    const commentBody = req.body

    try {
        const commentCreated = await createComment(commentBody)

        res.json(sendStandardResponse(200, "Welcome to the Food-side", commentCreated))
    } catch(error) {
        res.json({message:"comment Controller create route",
            error: error})
    }
})
///////INDEX///////
//comment ID
//TODO not sure how to set this up in correlation to index related comments to x forum. Well, I suppose that
// statement says how to do it.
//As of right now this doesn't work. Will return to it.
router.get('/index', async (req, res)=> {
    const { indexComments } = require('../services/commentServices/indexComments.js')
    const commentId = req.params.id
    try {
        const commentsIndexed = await indexComments(commentId)

        res.json(sendStandardResponse(200, "Welcome to the Food-side", commentsIndexed))
    } catch(error) {
        res.json({message:"comment Controller index route",
            error: error})
    }
})

//UPDATE
//comment id
router.put('/:id', async (req, res) => {
    const { updateComment } = require('../services/commentServices/updateComment.js')
    const commentId = req.params.id
    const commentBody = req.body

    try {
        const commentUpdated = await updateComment(commentId, commentBody)

        res.json(sendStandardResponse(200, "Welcome to the Food-side", commentUpdated))
    } catch(error) {
        res.json({message:"comment Controller update route",
            error: error})
    }
})

//DELETE
//comment id
router.delete('/:id', async (req,res) => {
    const { deleteComment } = require('../services/commentServices/deleteComment.js')
    const commentId = req.params.id

    try {
        const commentDeleted = await deleteComment(commentId)

        res.json(sendStandardResponse(200, "Welcome to the Food-side", commentDeleted))
    } catch(error) {
        res.json({message:"comment Controller delete route",
            error: error})
    }

})

module.exports = router
