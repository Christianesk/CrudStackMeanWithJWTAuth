const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    name: String,
    price: { type: Number, default: 0 },
    category: String,
    description: String

});

module.exports = mongoose.model('Product', ProductSchema);

