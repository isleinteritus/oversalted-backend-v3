const commentModel = require('../../models/commentModel.js')

//TODO So take the forums Id, and collect all related comments of that forum. Index it based on that forum id
//based on the forum id
const commentIndexService = async (forumId) => {
    try{
        const foundComments = await commentModel.find(forumId)
        return foundComments
    }catch(error){
        throw Error(error)
    }

}

module.exports = {
    commentIndexService
}
