var mongoose = require("mongoose");

const typeSchema = mongoose.Schema(
  {
    product_type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Type", typeSchema);
