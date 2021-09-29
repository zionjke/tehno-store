const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')
const {where} = require("sequelize");

class BrandController {
    async create (req,res,next){
        const {name} = req.body
        const existingBrand = await Brand.findOne({where:{name}})
        if(existingBrand) {
            return res.json({message:'Такой бренд уже существует'})
        }
        const brand = await Brand.create({name})
        res.json(brand)
    }

    async getAll (req,res,next){
        const brands = await Brand.findAll()
        res.json(brands)
    }

}

module.exports = new BrandController()