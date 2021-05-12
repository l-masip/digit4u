const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expertSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: string, required: true },
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

const Expert = mongoose.model("Expert", expertSchema);
module.exports = Expert;
