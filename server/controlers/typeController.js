const {Type, Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create (req,res,next){
        const {name} = req.body
        const existingType = await Type.findOne({where:{name}})
        if(existingType) {
            return res.json({message:'Такой тип уже существует'})
        }
        const type = await Type.create({name})
         res.json(type)
    }

    async getAll (req,res,next){
        const types = await Type.findAll()
        res.json(types)
    }

}

module.exports = new TypeController()