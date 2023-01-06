// mongodb.js

import mongoose from 'mongoose';


const itemSchema = new mongoose.Schema({
  name: {
    type:String,
    maxlength: 10,
    required: true
  },
  description: {
    type:String,
    maxlength: 50
  },
  price: Number
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
