const forumsModel = require('../../models/forumModel.js')

//currently does not work. Haven't decided how to form to present the index in correlation to overSalteds echo system.
const forumIndexService = async (forumIndex) => {
    try {
         forumsModel.find(forumIndex, (error, foundForums) => {
        	if (error) {
        		console.error(error)
        	} else {
        		return foundForums
        	}
        })
    } catch (error) {
        throw Error("Error while fetching user. Location: forumIndexService")
    }
}

module.exports = {
    forumIndexService
}
