const express = require("express")
const Component = require('../models/Component')
const router = express.Router()


router.post('/addComponent', async (req, res) => {
    try {
        const component = new Component({
            image: req.body.image,
            name: req.body.name,
            type: req.body.type,
            quantity: req.body.quantity,
            instock: req.body.instock
        })

        Component.create(component)
        res.status(200).json({
            message: "Component added to the database",
            data: component
        })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            message: "Error occurred while adding component to the database"
        })
    }

})

router.get('/getComponents', async (req, res) => {
    try {
        const components = await Component.find()
        res.status(200).json({
            components
        })
    } catch (e) {
        res.status(500).json({
            message: "Error occurred while retrieving the components"
        })
    }
})



router.get('/getComponentById/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const component = await Component.findOne({ "_id": id });

        if (!component) {
            return res.status(404).json({
                message: 'Component not found'
            });
        }

        res.status(200).json({
            data: component
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error occurred while retrieving the component'
        });
    }
});

router.patch('/updateComponentById/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { image, name, type, quantity, instock } = req.body
        console.log(id)
        const updatedComponent = await Component.findByIdAndUpdate(id, { image, name, type, quantity, instock }, { new: true })

        if (!updatedComponent) {
            return res.status(404).json({
                message: 'Component not found'
            });
        }

        res.status(200).json({
            message: "Component updated",
            data: updatedComponent
        })
    } catch (e) {
        res.status(500).json({
            message: "Error occurred while updating the component"
        })
    }
})


router.delete('/deleteComponentById/:id', async (req, res) => {
    try {
        const id = req.params.id
        const component = await Component.findOneAndDelete(id)

        if (!component) {
            return res.status(404).json({
                message: 'Component not found'
            });
        }

        res.status(200).json({
            message: "Component deleted successfully"
        })
    } catch (e) {
        res.status(500).json({
            message: "Error occurred while deleting the component"
        })
    }
})
module.exports = router