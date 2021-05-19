const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: ["Web Design", "Digital Marketing", "Staff Training", "Consulting"],
    },
    video_demo: { type: String, required: true },
    expert: { type: Schema.Types.ObjectId, ref: "Expert" },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
