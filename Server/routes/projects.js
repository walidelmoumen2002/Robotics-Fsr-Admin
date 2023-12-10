const express = require('express')
const Project = require('../models/Project')

const router = express.Router()

router.post('/addProject', async (req, res) => {
    try {
        const { name, description, members, components } = req.body
        const project = new Project({
            name, description, members, components
        })
        const newProjet = await project.save()

        res.status(200).json({
            message: "new project added",
            data: newProjet
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error occurred while adding project"
        })
    }
})
router.get('/getProjects', async (req, res) => {
    try {
        const projects = await Project.find()

        res.status(200).json({
            data: projects
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while getting projects"
        })
    }
})

router.get('/getProject/:id', async (req, res) => {
    try {
        const { id } = req.params

        const project = await Project.findOne({ "_id": id })

        if (!project) {
            return res.status(404).json({
                message: "Project Not Found"
            })
        }

        res.status(200).json({
            data: project
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error occurred while getting the project"
        })
    }
})
router.patch('/updateProject/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, description, members, components } = req.body

        const updatedProject = await Project.findByIdAndUpdate(id, { name, description, members, components })

        if (!updatedProject) {
            return res.status(404).json({
                message: "Project not found"
            })
        }

        res.status(200).json({
            message: "Project updated",
            data: updatedProject
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error occurred while updating the project"
        })
    }
})

router.delete('/deleteProject/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedProject = await Project.findByIdAndDelete(id)

        if (!deletedProject) {
            res.status(404).json({
                message: "project Deleted"
            })
        }
        res.status(200).json({
            message: "Project Deleted",
            data: deletedProject
        })
    } catch (e) {
        console.log(e)
        res.status(404).json({
            message: "Error occurred while deleting the project"
        })
    }
})
module.exports = router