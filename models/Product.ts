import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['vegetables', 'spices', 'fruits']
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: false
  },
  unit: {
    type: String,
    required: false,
    default: 'kg'
  },
  inStock: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
