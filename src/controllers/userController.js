const {User} = require('../models')

const usersController = {

    index: async (req,res) =>{
        
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

        res.status(200).json(req.body)
    }

}

module.exports = usersController;