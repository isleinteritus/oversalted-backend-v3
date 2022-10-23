const tagModel = require('../../models/tagModel.js')

const tagCreateService = async (tagBody) => {
    try {
        return await tagModel.create(tagBody)
    }catch(error) {

    }
}

module.exports = {
    tagCreateService
}
