const express = require('express')
const router = express.Router()
const usersModel = require('../models/usersModel.js')
const forumsModel = require('../models/forumsModel.js')
const commentsModel = require('../models/commentsModel.js')


//ROUTES
///////CREATE///////
router.post ('/create', (req, res) => {

		commentsModel.create(req.body, (error, createdComment) => {
			if (error) {
				console.error(error)
			} else {

				usersModel.findByIdAndUpdate(createdComment.commentOwner, {
					$push: {
						userComments: createdComment.id
					}
				}, (error, updatedUserComment) => {
					if (error) {
						console.error(error)
					}
				})

				forumsModel.findByIdAndUpdate(createdComment.parentForum, {
					$push: {
						comments: createdComment.id
					}
				}, (error, updatedForumComment) => {
					if (error) {
						console.error(error)
					}
				})

				res.json(createdComment)
			}
		})
})
///////INDEX///////
//forum ID
router.get('/:id', (req, res)=> {
	commentsModel.findById(req.params.id, (error, foundComment) => {
		if (error) {
			console.error(error)
		} else {
			res.json(foundComment)
		}
	})
})

//UPDATE
//comment id
router.put('/:id', (req, res) => {
		commentsModel.findByIdAndUpdate(
			req.params.id
			, (error, updatedComment) => {
				if (error) {
					console.error(error)
				} else {
					res.json({message:"successful"})
				}
			}
		)
})

//DELETE
//comment id
router.delete('/:id', (req,res) => {
	commentsModel.findByIdAndDelete(
		req.params.id,
		(error, deletedComment) => {
			if (error) {
				console.error(error)
			} else {

				usersModel.updateOne({}, {
					$pull: {
						userComments: {
							$in: deletedComment._id
						}
					}
				}, (error, updatedUserComment) => {
					if (error) {
						console.error(error)
					}
				})

				forumsModel.updateOne({}, {
					$pull: {
						comments: {
							$in: deletedComment._id
						}
					}
				}, (error, updatedForumComment) => {
					if (error) {
						console.error(error)
					}
				})

				res.json({message: "Comment deleted"})
			}
		})
})

module.exports = router