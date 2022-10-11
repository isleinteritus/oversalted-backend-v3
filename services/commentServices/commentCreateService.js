const commentModel = require('../../models/commentsModel.js')
const usersModel = require("../../models/usersModel.js");
const forumsModel = require("../../models/forumsModel.js");

const commentCreateService = async (commentData) => {
    commentModel.create(commentData,
            (error, createdComment) => {
                if (error) {
                    console.error(error)
                } else {
                    usersModel.findByIdAndUpdate(createdComment.commentOwner, {
                        $push: {
                            userComments: createdComment.id
                        }
                    }, (error, updatedUserComment) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                    forumsModel.findByIdAndUpdate(createdComment.parentForum, {
                        $push: {
                            comments: createdComment.id
                        }
                    }, (error, updatedForumComment) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                    //probaly should return the newly created data. :P
                }
            })
}

module.exports = {
    commentCreateService
}
