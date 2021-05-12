const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  surname: {type: String, required: true},
  phone: {type: Number, required: true},
  position: {type: String},
  products: {type:Schema.Types.ObjectId, ref:'Product'},
  role: {type: String, enum:['admin', 'user'], default: 'user'}
}, {
  timestamps:true,
  toJSON: {
    transform: (doc, ret) =>{
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }

})

const User = mongoose.model('User', userSchema);
module.exports = User;
