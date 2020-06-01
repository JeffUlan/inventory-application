const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating our Product Schema with it's elements
const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    price: { type: Number, required: true },
    numberInStock: { type: Number, required: true },
    productImage: { type: String, required: true }
});

ProductSchema.virtual('url').get(function () {
    return '/product/' + this._id;
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;