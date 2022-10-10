const forumsModel = require('../../models/forumsModel.js')


const forumIndexService = async (forumIndex) => {
    try {
        await forumsModel.find(forumIndex, (error, foundForums) => {
        	if (error) {
        		console.error(error)
        	} else {
        		return foundForums
        	}
        })
    } catch (error) {
        throw Error('Error while fetching user. Location: forumIndexService')
    }
}

module.exports = {
    forumIndexService
}
