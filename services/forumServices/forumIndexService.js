const forumModel = require('../../models/forumModel.js')

//currently does not work. Haven't decided how to form to present the index in correlation to overSalteds echo system.
const forumIndexService = async (forumIndex) => {
    await forumModel.find(forumIndex, (error, foundForums) => {
        if (error) {
            console.error(error)
        } else {
            return foundForums
        }
    })
}

module.exports = {
    forumIndexService
}
