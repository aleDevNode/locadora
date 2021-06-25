const bcrypt = require('bcrypt') 
const { password } = require('../config/database')
const {User} = require('../models')

const usersController = {

    index: async (req,res) =>{
       console.log(req.token);
        try {
            const user = await User.findAll({
                attributes:{
                    exclude:['password']
                }
            }) 

            return res.status(200).json(user)
            
        } catch (error) {
            
            return res.status(400).json({msg:"not possivle your solicitation:" + error})
     }
          
    },
    create: async (req, res) =>{
        const {
            name,
	        email,  
	        login, 
            password, 
	       
        } = req.body

        try {
            const userCreate = {
                name,
                email,  
                login, 
                password: bcrypt.hashSync(password, 10),                 
            }

            const user = await User.create(userCreate) 
            return res.status(201).json(user)
        } catch (error) {
            return res.status(400).json(error)            
        }
    },
    update: async(req, res) =>{
        const {
            id,
            name,
	        email,  
	        login, 
            password, 
            status	       
        } = req.body

        try {
            const user = await User.findByPk(id)
            const userUpdate = { 
                name: name != ""? name: user.name,
                email: email != ""? email: user.email,  
                login: login != ""? login: user.login, 
                password: password != ""? bcrypt.hashSync(password,10): user.password,
                status: status != ""? status: user.status,
            }
            const response = await User.update(userUpdate, {
                where: {
                    id
                }
            })
            
            return res.status(200).json(response)            
        } catch (error) {
            return res.status(400).json(error)             
        }
    }, 
    delete: async(req, res) =>{
        const {id} = req.body
        try {
            const response = await User.destroy({
                where: {
                    id
                }
            })
            return res.status(200).json(response)  
        } catch (error) {
            return res.status(400).json(error)  
        }
    } 


}

module.exports = usersController;