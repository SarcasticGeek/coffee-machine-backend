var mongoose = require("mongoose");

const flavorSchema = mongoose.Schema(
  {
    flavor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flavor", flavorSchema);
