const express = require('express')
const router = express.Router()
const usersModel = require('../models/usersModel.js')
const forumsModel = require('../models/forumsModel.js')
const commentsModel = require('../models/commentsModel.js')

//ROUTES
///////CREATE USER///////
router.post('/register', (req, res) => {
		usersModel.create(
			req.body
			, (error, createdUser) =>{
				if (error) {
					console.error(error)
				} else {
					res.json(createdUser)
				}
			})
})

router.post('/login', (req, res) => {
		usersModel.findOne(
			req.body,
			(error, foundUser) =>{
				if (error) {
					console.error(error)
				} else {
					res.json(foundUser)
				}
			})
})

//todo requires sessions to make sense.
router.post('/logout', (req, res) => {
	const userInfo = req.body
	usersModel.findOne(
		userInfo,
		(error, foundUser) =>{
			if (error) {
				console.error(error)
			}  else {

			}
		})
	res.json({message : "you've been logged out"})

})

///////INDEX///////
router.get('/index', (req, res)=> {
	usersModel.find({
	}, (error, foundUsers) => {
		if (error) {
			console.error(error)
		} else {
			res.json(foundUsers)
		}
	})
})

///////SHOW///////
//user id
router.get('/:id', (req, res) => {
	//finds specific id and shows it to user
	usersModel.findById(
		req.params.id,
		(error, foundUser) => {
			if (error) {
				console.error(error)
			} else {
				res.json(foundUser)
			}
		})
})

//UPDATE
//user id
router.put('/:id', (req, res) => {
	const userInfo = req.body.id
	usersModel.findByIdAndUpdate(
			req.body.id
			, (error, _updatedUser) => {
				if (error) {
					console.error(error)
				} else {
					res.json({message: "updated user"})
				}
			})
})

//DELETE
//user ID
router.delete('/:id', (req, res) => {
	usersModel.findByIdAndRemove(
		req.params.id,
		(error, _deletedUser) => {
			if (error) {
				console.error(error)
			} else {

				forumsModel.updateMany({}, {
					forumOwner: null
				}, (error, _deletedForum) => {
					if (error) {
						console.error(error)
					}
				})
				//TODO this one needs to be fixed
				commentsModel.updateMany({}, {
					//.TODO PLACEHOLDER TEXT FOR FUTURE USAGE.
					commentOwner: null
				}, (error, _deletedComment) => {
					if (error) {
						console.error(error)
					}
				})

				res.json({message: "user committed not alive"})
			}
		})
})

module.exports = router