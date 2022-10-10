const express = require('express')
const router = express.Router()
const usersModel = require('../models/usersModel.js')
const forumsModel = require('../models/forumsModel.js')
const commentsModel = require('../models/commentsModel.js')
const tagsModel = require('../models/tagsModel.js')
const {userShowService} = require("../services/userServices/userShowService");
const {sendStandardResponse} = require("../utils/jsonResponseHelpers");



//ROUTES
///////CREATE///////
router.post ('/create', (req, res) => {
    const {forumCreateService} = require('../services/userforumServices/forumCreateService.js')
	// const forumInfo = req.body
	// 	forumsModel.create(forumInfo, (error, createdForum) => {
	// 		if (error) {
	// 			console.error(error)
	// 		} else {
	// 			usersModel.findByIdAndUpdate(createdForum.forumOwner, {
	// 				$push: {
	// 					userForums: createdForum.id
	// 				}
	// 			}, (error, _updatedUserForum) => {
	// 				if (error) {
	// 					console.error(error)
	// 				}
	// 			})
    //
	// 			tagsModel.updateMany({
	// 				_id: {
	// 					$in: createdForum.parentTags
	// 				}
	// 			}, {
	// 				$push: {
	// 					taggedForums: {
	// 						_id: createdForum._id
	// 					}
	// 				}
	// 			}, (error, _updatedTags) => {
	// 				if (error) {
	// 					console.error(error)
	// 				}
	// 			})
	// 			//$each to push each tag into an array
	// 			res.json(createdForum)
	// 		}
	// 	})
})
///////INDEX///////
router.get('/index', (req, res)=> {
    const {forumIndexService} = require('../services/userforumServices/forumIndexService.js')
    //
	// forumsModel.find((error, foundForums) => {
	// 	if (error) {
	// 		console.error(error)
	// 	} else {
	// 		res.json(foundForums)
	// 	}
	// })
})

///////SHOW///////
//forum id
router.get('/:id', (req, res) => {
//finds specific id and shows it to user
    const {forumShowService} = require('../services/userforumServices/forumShowService.js') //TODO make route
    const forumID = req.params.id

    try {
        const foundForum = await forumShowService(forumID)

        res.json(sendStandardResponse(200, "User has been located", foundForum))
    } catch(error) {
        res.json({message:"forumcontroller show route",
            error: error})
    }
    /*
    const forumInfo = req.params.id
    forumsModel.findById(
        forumInfo
        , (error, foundForum) => {
            if (error) {
                console.error(error)
            } else {
                res.json(foundForum)
            }
        })

     */
})

//UPDATE
//forum id
router.put('/:id', (req,res) => {
    forumsModel.findByIdAndUpdate(
        req.params.id,
        {
            ...req.body
        }, (error, _updatedForum) => {
            if (error) {
                console.error(error)
            } else {
                res.json({message:"successful"})
            }
        })
})

//DELETE
//forum id (╯°Д°)╯︵/(.□ . \)
router.delete('/:id', (req,res) => {
    forumsModel.findByIdAndDelete(
        req.params.id,
        (error, deletedForum) => {
            if (error) {
                console.error(error)
            } else {
                usersModel.updateMany({}, {
                    $pull: {
                        userForums: {
                            $in: deletedForum._id
                        }
                    }
                    }, (error, _updatedUser) => {
                    if (error) {
                        console.error(error)
                    }
                })
                usersModel.updateMany({}, {
                    $pull: {
                        userComments: {
                            $in: deletedForum.comments
                        }
                    }
                    }, (error, _updatedUser) => {
                    if (error) {
                        console.error(error)
                    }
                })
                commentsModel.deleteMany({
                    _id: {
                        $in: deletedForum.comments
                    }
                    }, (error, _deletedComment) => {
                    if (error) {
                        console.error(error)
                    }
                })
                tagsModel.updateMany({}, {
                    $pull: {
                        taggedForums: {
                            $in: deletedForum._id
                        }
                    }
                    }, (error, _updatedTag) => {
                    if (error) {
                        console.error(error)
                    }
                })
                res.json({message: "Forum Deleted"})
            }
        })
})

module.exports = router
