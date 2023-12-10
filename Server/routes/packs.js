const express = require('express')
const router = express.Router()
const Pack = require('../models/Pack')



router.post('/addPack', async (req, res) => {
    try {
        const pack = new Pack({
            manager: req.body.manager,
            competition: req.body.competition,
            components: req.body.components
        })
        const savedPack = await pack.save()
        res.status(200).json({
            message: "Pack added",
            data: savedPack
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while adding the pack"
        })
    }

})
router.get('/getPacks', async (req, res) => {
    try {
        const packs = await Pack.find()

        res.status(200).json({
            data: packs
        })
    } catch (e) {
        res.status(500).json({
            message: "Error occurred while retrieving the packs"
        })
    }
})

router.get('/getPackById', async (req, res) => {
    try {
        const id = req.query.id
        console.log(id)
        const pack = await Pack.findOne({ _id: id })


        if (!pack) {
            return res.status(404).json({
                data: "Not Found"
            })
        }

        res.status(200).json({
            data: pack
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while retrieving the pack"
        })
    }
})

router.patch('/updatePackById/:id', async (req, res) => {
    try {
        const { manager, competition, components } = req.body
        const { id } = req.params
        const pack = await Pack.findByIdAndUpdate(id, {
            manager: manager,
            competition: competition,
            components: components
        },
            { new: true })

        if (!pack) {
            return res.status(404).json({
                data: "Not Found"
            })
        }

        res.status(200).json({
            data: pack
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while updating the pack"
        })
    }
})

router.delete('/deletePackById/:id', async (req, res) => {
    try {
        const id = req.params.id
        const pack = await Pack.findOneAndDelete(id, { id: id })

        if (!pack) {
            return res.status(404).json({
                data: "Not Found"
            })
        }
        res.status(200).json({
            message: "Pack deleted"
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while deleting the pack"
        })
    }
})
module.exports = router