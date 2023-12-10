const express = require('express')
const Team = require('../models/Team')
const router = express.Router()

router.post('/addTeam', async (req, res) => {
    try {
        const { competition, members, robotType, pack } = req.body
        const newTeam = new Team({ competition, members, robotType, pack })

        await newTeam.save()
        res.status(200).json({
            message: "new team added",
            data: newTeam
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while adding the team"
        })
    }
})

router.get('/getTeams', async (req, res) => {
    try {
        const teams = await Team.find()

        res.status(200).json({
            data: teams
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while retrieving the teams"
        })
    }
})

router.get('/getTeam/:id', async (req, res) => {
    try {
        const { id } = req.params
        const team = await Team.findOne({ "_id": id })

        if (!team) {
            res.status(404).json({
                message: "Team Not Found"
            })
        }

        res.status(200).json({
            data: team
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while retrieving the team"
        })
    }
})

router.patch('/updateTeam/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { competition, members, robotType, pack } = req.body
        const updatedTeam = await Team.findByIdAndUpdate(id, { competition, members, robotType, pack })

        if (!updatedTeam) {
            return res.status(404).json({
                message: "Team Not Found"
            })
        }
        res.status(200).json({
            message: "Team updated",
            data: updatedTeam
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while updating the team"
        })
    }
})

router.delete('/deleteTeam/:id', async (req, res) => {
    try {
        const { id } = req.params

        const deletedTeam = await Team.findByIdAndDelete(id)

        if (!deletedTeam) {
            return res.status(404).json({
                message: "Team Not Found"
            })
        }
        res.status(200).json({
            message: "Team deleted",
            data: deletedTeam
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while deleting the team"
        })
    }
})
module.exports = router