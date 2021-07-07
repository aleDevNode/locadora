const {
    Model
} = require('../models')

const modelController = {

    index: async (req, res) => {

        try {
            const models = await Model.findAll()
            return res.status(200).json(models)

        } catch (error) {

            return res.status(400).json(error)
        }
    },
    create: async (req,res) =>{

    },
    update: async (req,res) =>{

    },
    delete: async (req,res) =>{

    },

}


module.exports = modelController