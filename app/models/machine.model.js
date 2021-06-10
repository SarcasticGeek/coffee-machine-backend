var mongoose = require("mongoose");

const machineSchema = mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    water_line_compatible: { 
      type: Boolean, default: false 
    },
    product_type_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type",
      required: true
    },
    product_type: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Machine", machineSchema);
