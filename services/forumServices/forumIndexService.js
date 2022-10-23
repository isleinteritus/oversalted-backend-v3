const forumModel = require('../../models/forumModel.js')

//currently does not work. Haven't decided how to form to present the index in correlation to overSalteds echo system.
const forumIndexService = async (forumIndex) => {
    try{
        const foundForums = await forumModel.find(forumIndex)
        return foundForums
    } catch(error) {

    }
}

module.exports = {
    forumIndexService
}
