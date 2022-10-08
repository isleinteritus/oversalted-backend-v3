const express = require('express')
const router = express.Router()
const {sendStandardResponse, sendDeletedResponse} = require('../utils/jsonResponseHelpers')
const forumsModel = require('../models/forumsModel.js')
const commentsModel = require('../models/commentsModel.js')


//ROUTES
///////CREATE USER///////
router.post('/create', async (req, res) => {
    const { userCreateService } = require('../services/userServices/userCreateService.js')
    const userInput = req.body //users name email password

    try {
        const createdUser = await userCreateService (userInput)
        
        res.json(sendStandardResponse(200, "Welcome to the Food-side", createdUser))
    } catch(error) {
        res.json({error:"usercontroller register route",
            error: error})
    }
})

//login user
router.post('/login', async (req, res) => {
    const {userLoginService} = require('../services/userServices/userLoginService.js')
    const userInput = req.body //email & password

    try{
        const userLoggedIn = await userLoginService(userInput)

        res.json(sendStandardResponse(200, "You're logged in!", userLoggedIn))
    } catch(error) {
        res.json({error:"usercontroller login route",
            error: error})
    }
})

//logout user
//todo requires sessions to make sense.
router.post('/logout', async (req, res) => {
    const {userLogoutService} = require('../services/userServices/userLogoutService.js')
    const userInput = req.body //this will change to sessions w/ redis

    try{
        const userLoggedOut = await userLogoutService(userInput)

        res.json(sendStandardResponse(200, "Bye bye forever", userLoggedOut))
    } catch(error) {
        res.json({error:"usercontroller logout route",
            error: error})
    }

})

///////SHOW///////
//user id
router.get('/:id', async (req, res) => {
    //finds specific id and shows it to user
    const {userShowService} = require('../services/userServices/userShowService.js')
    const userID = req.params.id

    try {
        const foundUser = await userShowService(userID)

        res.json(sendStandardResponse(200, "User has been located", foundUser))
    } catch(error) {
        res.json({message:"usercontroller show route",
            error: error})
    }
})

//UPDATE
//user id
router.put('/:id', async (req, res) => {
    const {userUpdateService} = require('../services/userServices/userUpdateService.js')
    const userIDAndInfo = req.body.id //users name email password & id

    try {
        const updatedUser = await userUpdateService(userIDAndInfo)

        res.json(sendStandardResponse(200, "User has been updated", updatedUser))
    } catch (error) {
        res.json({message:"usercontroller update route",
            error: error})
    }
})

//DELETE
//user ID
//Still working out some loose ends here. Returns error yet deletse user still. Not sure how to send the correct
// json response after user is deleted. Deletion logic is in services/userDeleteServices.js
router.delete('/:id', async (req, res) => {
    const {userDeleteService} = require('../services/userServices/userDeleteService.js')
    const userID = req.params.id //users ID

    try {
        const deletedUser = await userDeleteService(userID)

        res.json(sendStandardResponse(200, "The Kitchen Death-God takes another", deletedUser))
    }catch (error) {
        res.json({message:"usercontroller deleted route",
            error: error})
    }
})

module.exports = router
