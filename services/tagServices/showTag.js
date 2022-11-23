const tagModel = require( '../../models/tagModel.js' )

const showTag = async( tagId ) => {
    try {
        return await tagModel.findById( tagId )
    }
    catch ( error ) {
        throw Error( error )
    }
}

module.exports = {
    showTag
}
