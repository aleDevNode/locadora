const userDatabase = require('../database/services/userDatabase')
const usersController = {

    index: async (req, res) => {
        try {
            const user = await userDatabase.userFindAll()
            return res.status(200).json(user)
        } catch (error) {
            return res.status(400).json({ msg: "not possivle your solicitation:" + error })
        }
    },
    create: async (req, res) => {
        try {
            const user = await userDatabase.userCreate(req.body)
            return res.status(201).json(user)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    update: async (req, res) => {
        try {
            const response = await userDatabase.userUpdate(req.body)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    delete: async (req, res) => {
        try {
            const response = await userDatabase.userDelete(req.body)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}
module.exports = usersController;