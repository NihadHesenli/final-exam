const products = require('../models/models')

const getAllData = async (req,res)=>{
    try {
        const clothers = await products.find({})
        res.status(200).json(clothers)
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}

const getTheDataById = async (req,res)=>{
    const {id} = req.params
    try {
        const clothers = await products.findById(id)
        res.status(200).send(clothers)
    } catch (error) {
        res.status(404).send({message : error.message})
    }
}

const deleteProd = async (req,res)=>{
    const {id} = req.params
    try {
        const deleted = await products.findByIdAndDelete(id)
        if (!deleted) {
            res.status(500).send({message: "product deosnt exist"})
        }
        res.status(200).send(deleted)
    } catch (error) {
        res.status(404).send({message : error.message})
    }
}

const addData = async (req,res)=>{
    const {title,image,description,price} = req.body
    if (!title || !image || !description || !price) {
        res.status(400).send({message : "fill all inputs"})
    }
    try {
        const newData = products({...req.body})
        newData.save()
        res.json(newData)
    } catch (error) {
        res.status(404).send({message : error.message})
    }
}

module.exports = {getAllData,getTheDataById,deleteProd,addData}