const express = require('express')
const router = express.Router()
const {sendStandardResponse} = require('../utils/jsonResponseHelpers.js')


//ROUTES

///////CREATE USER///////
router.post('/create', async (req, res) => {
    const { userCreateService } = require('../services/userServices/userCreateService.js')
    const userBody = req.body //users name email password

    try {
        const createdUser = await userCreateService (userBody)
        
        res.json(sendStandardResponse(200, "Welcome to the Food-side", createdUser))
    } catch(error) {
        res.json({message:"userController register route",
            error: error})
    }
})

//login user
router.post('/login', async (req, res) => {
    const {userLoginService} = require('../services/userServices/userLoginService.js')
    const userId = req.body.id
    const userBody = req.body //email & password

    try{
        const userLoggedIn = await userLoginService(userId, userBody)

        res.json(sendStandardResponse(200, "You're logged in!", userLoggedIn))
    } catch(error) {
        res.json({message:"userController login route",
            error: error})
    }
})

//logout user
//todo requires sessions to make sense.
router.post('/logout', async (req, res) => {
    const {userLogoutService} = require('../services/userServices/userLogoutService.js')
    const userId  = req.params.id
    const userBody = req.body //this will change to sessions w/ redis

    try{
        const userLoggedOut = await userLogoutService(userId, userBody)

        res.json(sendStandardResponse(200, "Bye bye forever", userLoggedOut))
    } catch(error) {
        res.json({message:"userController logout route",
            error: error})
    }

})

///////SHOW///////
//user id
router.get('/:id', async (req, res) => {
    //finds specific id and shows it to user
    const {userShowService} = require('../services/userServices/userShowService.js')
    const userId = req.params.id

    try {
        const foundUser = await userShowService(userId)

        res.json(sendStandardResponse(200, "User has been located", foundUser))
    } catch(error) {
        res.json({message:"userController show route",
            error: error})
    }
})

//UPDATE
//user id
router.put('/:id', async (req, res) => {
    const {userUpdateService} = require('../services/userServices/userUpdateService.js')
    const userId = req.params.id //users name email password & id
    const userBody = req.body

    try {
        const updatedUser = await userUpdateService(userId, userBody)

        res.json(sendStandardResponse(200, "User has been updated", updatedUser))
    } catch (error) {
        res.json({message:"userController update route",
            error: error})
    }
})

//DELETE
//user ID
//Still working out some loose ends here. Returns error yet delete user still. Not sure how to send the correct
// json response after user is deleted. Deletion logic is in services/userDeleteServices.js
router.delete('/:id', async (req, res) => {
    const {userDeleteService} = require('../services/userServices/userDeleteService.js')
    const userId = req.params.id //users ID

    try {
        const deletedUser = await userDeleteService(userId)

        res.json(sendStandardResponse(200, "The Kitchen Death-God takes another", deletedUser))
    }catch (error) {
        res.json({message:"userController deleted route",
            error: error})
    }
})

module.exports = router
