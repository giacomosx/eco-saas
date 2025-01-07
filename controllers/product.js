const Product = require("../models/product")

const createProduct = async (req, res) => {
    const product = req.body

    try {
        const existingProduct = await Product.findOne({cod: product.cod});

        if (existingProduct) {
            return res.status(400).json({message:"Product already exists"});
        }

        const newProduct = await new Product(product)
        await newProduct.save()
        return res.status(201).json(newProduct)

    } catch (e) {
        console.log(e)
        return res.status(500).json({error: e.message})
    }
}

const getAllProducts = async (req, res) => {

    try {
        const products = await Product.find()

        return res.status(200).json(products)

    } catch (e) {
        console.log(e)
        return res.status(500).json({error: e.message})
    }
}

const getProductByDescription = async (req, res) => {
    const { description } = req.query

    try {
        const products = await Product.find({description: {$regex: description, $options: "i"}})

        return res.status(200).json(products)

    } catch (e) {
        console.log(e)
        return res.status(500).json({error: e.message})
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductByDescription,
}