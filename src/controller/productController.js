import Product from "../productSchema/pSchema.js"

const createNew = async(req, res)=>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product})
}

const getAllProducts = async(req, res) =>{
    const products = await Product.find()
    res.status(200).json({
        success:true,
        "All Prodcuts": products
    })
}
const updateProduct = async(req, res) =>{
    let updatedProdcut =await Product.findById(req.params.id)
    updatedProdcut = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        success:true,
        "Updated Product": updatedProdcut
    })
}
const deleteProduct = async(req, res) =>{
    let deletedProdcut =await Product.findById(req.params.id)
    deletedProdcut = await Product.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json({
        success:true,
        message: "Product is deleted successfully"
        
    })
}

export default {
    createNew,
    getAllProducts,
    updateProduct,
    deleteProduct

}