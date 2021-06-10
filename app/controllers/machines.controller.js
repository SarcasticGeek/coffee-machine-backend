var Machine = require('../models/machine.model');

exports.getMachines = async (req, res) => {
  const productType = req.query.productType ? { product_type: req.query.productType } : {};

  const waterLine =
    req.query.waterLine === "true" || req.query.waterLine === "false"?
     { water_line_compatible: req.query.waterLine } : {};

  const machines = await Machine.find(productType)
    .find(waterLine)
  ;

  return res.status(200).json(machines);
};
