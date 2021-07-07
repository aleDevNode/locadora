const authDatabase = require('../database/services/authDatabase')
const authController = {

    auth: async (req, res) => {
        try {
           const token = await authDatabase.auth(req.body)
            // retorna sucesso "200 ok" e o token de acesso
            return res.status(200).json(token)
        } catch (error) {
            return res.status(401).json(error)
        }
    }
}

module.exports = authController