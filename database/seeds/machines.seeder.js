var Type = require("../../app/models/type.model");
var Machine = require("../../app/models/machine.model");

module.exports = () => {
  try {
    return new Promise(async (resolve, reject) => {
      const large = new Type({
        product_type: "COFFEE_MACHINE_LARGE"
      });
      await large.save();

      const small = new Type({
        product_type: "COFFEE_MACHINE_SMALL"
      });
      await small.save();

      const espresso = new Type({
        product_type: "ESPRESSO_MACHINE"
      });
      await espresso.save();

      await Machine.insertMany([
        {
          sku: "EM001",
          description: "espresso machine, base model",
          product_type_id: espresso.id,
          product_type: espresso.product_type
        },
        {
          sku: "EM002",
          description: "espresso machine, premium model",
          product_type_id: espresso.id,
          product_type: espresso.product_type
        },
        {
          sku: "EM003",
          description: "espresso machine, deluxe model, water line compatible",
          water_line_compatible: true,
          product_type_id: espresso.id,
          product_type: espresso.product_type
        },
        {
          sku: "CM001",
          description: "small machine, base model",
          product_type_id: small.id,
          product_type: small.product_type
        },
        {
          sku: "CM002",
          description: "small machine, premium model",
          product_type_id: small.id,
          product_type: small.product_type
        },
        {
          sku: "CM002",
          description: "small machine, delux water line compatible",
          water_line_compatible: true,
          product_type_id: small.id,
          product_type: small.product_type
        },
        {
          sku: "CM101",
          description: "large machine, base model",
          product_type_id: large.id,
          product_type: large.product_type
        },
        {
          sku: "CM102",
          description: "large machine, premium model, water line compatible",
          water_line_compatible: true,
          product_type_id: large.id,
          product_type: large.product_type
        }
      ]);

      resolve(console.log("Machines seed completed!"));
    });
  } catch (e) {
    console.log(e.message);
  }
};
