const bcrypt = require('bcrypt')
const { User } = require('../../models')

module.exports = {
    userFindAll: async () => {
        try {
            const user = await User.findAll({
                attributes: {
                    exclude: ['password']
                }
            })
            return user
        } catch (error) {
            throw error
        }
    },

     userCreate: async (user) => {
        const {
            name,
            email,  
            login, 
            password,            
        } = user
        try {
        const userCreate = {
            name,
            email,  
            login, 
            password: bcrypt.hashSync(password, 10),                 
            }
            const user = await User.create(userCreate)
            return user 
        } catch (error) {
            throw error            
        }
     },
     userUpdate: async (user) => {
        const {
            id,
            name,
	        email,  
	        login, 
            password, 
            status	       
        } = user

        try {
            const user = await User.findByPk(id)
            const userUpdate = {
                name: name != ""? name: user.name,
                email: email != ""? email: user.email, 
                login: login != ""? login: user.login,  
                password: password != ""?bcrypt.hashSync(password,10): user.password, 
                status: status != ""? status: user.status	  
            }
            const response = await User.update(userUpdate, {
                where: {
                    id
                }
            })
            return response
        } catch (error) {
            throw error               
        }        
     },
     userDelete: async (user) => {
        const {id} = user
        try {
            const response = await User.destroy({
                where: {
                    id
                }
            })
            return response
        } catch (error) {
            throw error
        }

     } 
}