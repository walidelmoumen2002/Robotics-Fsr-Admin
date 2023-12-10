const express = require('express')
const Member = require('../models/Member')

const router = express.Router()

router.post('/addMember', (req, res) => {
    try {
        const { firstName, lastName, semester, branch, seniority, contribution, reglement } = req.body

        const newMember = new Member({
            firstName, lastName, semester, branch, seniority, contribution, reglement
        })

        Member.create(newMember)
        res.status(200).json({
            message: "member added",
            data: newMember
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: e
        })
    }
})

router.get('/getMembers', async (req, res) => {
    try {
        const membres = await Member.find()

        res.status(200).json({
            data: membres
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: e
        })
    }
})

router.get('/getMemberById/:id', async (req, res) => {
    try {
        const { id } = req.params
        const member = await Member.findById({ '_id': id })

        if (!member) {
            return res.status(404).json({
                message: 'Member not found'
            });
        }

        res.status(200).json({
            data: member
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: e
        })
    }
})

router.patch('/updateMember/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { firstName, lastName, semester, branch, seniority, contribution, reglement } = req.body

        const member = await Member.findByIdAndUpdate(id, {
            firstName, lastName, semester, branch, seniority, contribution, reglement
        },
            { new: true })

        if (!member) {
            return res.status(404).json({
                message: "Member not found"
            })

        }
        res.status(200).json({
            data: member
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: e
        })
    }
})

router.delete('/deleteMember/:id', async (req, res) => {
    try {
        const { id } = req.params
        const member = await Member.findByIdAndUpdate(id)

        if (!member) {
            res.status(404).json({
                message: "member not found"
            })
        }

        res.status(200).json({
            message: "Member deleted"
        })
    } catch (e) {
        res.status(500).json({
            message: e
        })
    }
})
module.exports = router