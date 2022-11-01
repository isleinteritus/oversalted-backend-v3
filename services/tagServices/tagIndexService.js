const tagModel = require('../../models/tagModel.js')
//doesn't work.
const tagIndexService = async (tagIndex) => {
    try {
        const foundTags = await tagModel.find(tagIndex)
        return foundTags
    }catch(error){
        throw Error(error)
    }

}

module.exports = {
    tagIndexService
}
