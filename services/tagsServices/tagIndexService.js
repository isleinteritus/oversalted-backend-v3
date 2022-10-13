const tagModel = require('../../models/tagModel.js')
//doesn't work.
const tagIndexService = (tagIndex) => {
    tagModel.find((error, foundTags) => {
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
