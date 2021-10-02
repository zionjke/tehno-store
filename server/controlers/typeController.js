const {Type, Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create (req,res,next){
        try {
            const {name} = req.body
            const type = await Type.create({name})
            return  res.json(type)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll (req,res,next){
        const types = await Type.findAll()
        res.json(types)
    }

}

module.exports = new TypeController()