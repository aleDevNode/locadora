const {
    User
} = require('../models') //Desistrutura os models
const jwt = require('jsonwebtoken') //Gera token de acesso ao sistema
const bcrypt = require('bcrypt') // hash das senhas
require('dotenv').config()
const jwtPass = process.env.JWT_PASS
const authController = {

    auth: async (req, res) => {
        try {
            // desistruturando os dados pelo body do formulários 
            const {
                login,
                password
            } = req.body
            // Consulta um unico usuário no banco
            const user = await User.findOne({
                where: {
                    login
                }
            })
            // Verifica se existe usuário
            if (!user) return res.status(401).json({
                msg: "User or password invalid!"
            })

            const userPass = bcrypt.compareSync(password, user.password)
            // Verifica se a senha está correta
            if (!userPass) return res.status(401).json({
                msg: "User or password invalid!"
            })

            // Gera um objeto para passar no jwt com os dados do banco de dados
            const usuToken = {
                id: user.id,
                name: user.name,
                email: user.email,
                login: user.login,
                status: user.status
            }

            //Gera um token de acesso utilizando a lib jsonwebtoken  
            const token = await jwt.sign(usuToken, jwtPass, {
                expiresIn: '8h'
            })

            // retorna sucesso "200 ok" e o token de acesso
            return res.status(200).json(token)
        } catch (error) {

            return res.status(400).json(error)

        }
    }


}

module.exports = authController