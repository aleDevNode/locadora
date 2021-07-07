const {
  User
} = require("../../models"); //Desistrutura os models
const jwt = require("jsonwebtoken"); //Gera token de acesso ao sistema
const bcrypt = require("bcrypt"); // hash das senhas
require("dotenv").config();
const jwtPass = process.env.JWT_PASS;
module.exports = {
  auth: async (auth) => {
    // desistruturando os dados pelo parametro  do formulários
    const {
      login,
      password
    } = auth
    try {
      // Consulta um unico usuário no banco
      const user = await User.findOne({
        where: {
          login
        }
      })
      // Verifica se existe usuário
      if (!user) throw "User or Password Invalid"

      const userPass = bcrypt.compareSync(password, user.password)
      // Verifica se a senha está correta
      if (!userPass) throw "User or Password Invalid"

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
  return {token}
    } catch (error) {
      throw error
    }


  },
};