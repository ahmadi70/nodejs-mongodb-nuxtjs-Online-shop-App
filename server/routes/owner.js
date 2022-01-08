const router = require('express').Router()
const Owner = require('../models/owner')

// post request - insert an owner
router.post('/owners', async (req, res) => {
    try {
        const owner = new Owner()
        owner.name = req.body.name
        owner.about = req.body.about

        await owner.save()

        res.json({
            status: true,
            message: "new Owner Successfully saved."
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// get request - get all owners
router.get('/owners', async (req, res) => {
    try {
        let owners = await Owner.find()
        res.json({
            status: true,
            owner: owners
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router