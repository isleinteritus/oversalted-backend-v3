const express = require('express')
const router = express.Router()
const tagsModel = require('../models/tagsModel.js')
const forumsModel = require('../models/forumsModel.js')


//ROUTES
///////CREATE///////
router.post ('/create', (req, res) => {
    const tagInfo = req.body
        tagsModel.create(tagInfo
            , (error, createdTag) =>{
            if (error) {
                console.error(error)
            } else {
                res.json(createdTag)
            }
        })
})

///////INDEX///////
router.get('/index', (req, res)=> {
    tagsModel.find((error, foundTags) => {
        if (error){
            console.error(error)
        }else{
            res.json(foundTags)
        }
    })
})

///////SHOW///////
//tag id
router.get('/:id', (req, res) => {
            tagsModel.findById(
                req.params.id,
                (error, foundTag) => {
                if (error) {
                    console.error(error)
                } else {
                    res.json(foundTag)
                }
            })
})

//UPDATE
//tag id
router.put('/:id', (req, res) => {
    const tagID = req.params.id
        tagsModel.findByIdAndUpdate(
            tagID
        , (error, _updatedTag) => {
            if (error) {
                console.error(error)
            } else {
                res.json({message: "updated tag"})
            }
        })
})
//potential edge cases of having one tag only in the forum. All forums require >=1 tag
router.delete('/:id', (req, res) => {
    tagsModel.findByIdAndDelete(
        req.params.id,
        (error, deletedTag) => {
        if (error) {
            console.error(error)
        } else {
            forumsModel.updateMany({}, {
                $pull: {
                    parentTags: {
                        $in: deletedTag._id
                    }
                }
            }, (error, _updatedForumTag) => {
                if (error) {
                    console.error(error)
                }
            })

            res.json({message: "Tag deleted"})
        }
    })
})

module.exports = router
