const tagModel = require('../../models/tagModel.js')
//doesn't work.
const tagIndexService = async (tagIndex) => {
    await tagModel.find((error, foundTags) => {
        if (error){
            console.error(error)
        }else{
            return foundTags
        }
    })
}

module.exports = {
    tagIndexService
}
