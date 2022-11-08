const forumModel = require('../../models/forumModel.js')

//currently does not work.
const indexForums = async (forumIndex) => {
    try{
        await forumModel.find(forumIndex)

    } catch(error) {
        throw Error(error)

    }
}

module.exports = {
    indexForums
}
