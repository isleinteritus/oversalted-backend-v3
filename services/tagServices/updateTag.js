const tagModel = require( '../../models/tagModel.js' )

const updateTag = async( tagId, tagBody ) => {
    try {
        await tagModel.findByIdAndUpdate( tagId, {
            ...tagBody
        } )
        return tagModel.findById( tagId )
    }
    catch ( error ) {
        throw Error( error )
    }
}

module.exports = {
    updateTag
}
