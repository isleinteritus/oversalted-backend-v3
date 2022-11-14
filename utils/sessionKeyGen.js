const { nanoid } = require('nanoid/async')

//generates a 21 character string.
//passing in a number will change the default character to that number of characters.
const sessionKeyGen = async () => {
    return await nanoid()
}

//If you wish to use a keyGen elsewhere create another file with the type of keyGen it is.

module.exports = {
    sessionKeyGen
}
