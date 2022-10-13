const commentModel = require('../../models/commentModel.js')

//TODO So take the forums Id, and collect all related comments of that forum. Index it based on that forum id
//based on the forum id
const commentIndexService = (forumId) => {
        commentModel.find(forumId, (error, foundComments) => {
            if (error) {
                console.error(error)
            } else {
                return foundComments
            }
        })
}

module.exports = {
    commentIndexService
}
