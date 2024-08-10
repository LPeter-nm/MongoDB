import {Product} from '../models/product.model.js'


export const getProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const getProduct = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const product = await Product.findById(id);
        return res.status(200).json(product);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const postProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        };

        const updatedProduct = await Product.findById(id);
        return res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        };

        return res.status(200).json({
            message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}





