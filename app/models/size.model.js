var mongoose = require("mongoose");

const sizeSchema = mongoose.Schema(
  {
    pack_size: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Size", sizeSchema);
