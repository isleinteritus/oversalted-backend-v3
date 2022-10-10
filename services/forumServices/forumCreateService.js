const forumsModel = require('../../models/forumsModel')
const usersModel = require("../../models/usersModel");

const forumCreateService = async (userID) => {
    try {
        const foundForum = await forumsModel.findById(userID)
        return foundforum
    } catch (error) {
        throw Error('Error while fetching user. Location: forumCreateService')
    }
}

module.exports = {
    forumCreateService
}
