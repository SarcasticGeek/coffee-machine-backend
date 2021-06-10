var Pod = require("../models/pod.model");

exports.getPods = async (req, res) => {
  const productType = req.query.productType? { product_type: req.query.productType } : {};

  const coffeeFlavor = req.query.coffeeFlavor? { coffee_flavor: req.query.coffeeFlavor } : {};

  const packSize = req.query.packSize ? { pack_size: req.query.packSize } : {};

  const pods = await Pod.find(productType)
    .find(coffeeFlavor)
    .find(packSize)
  ;

  return res.status(200).json(pods);
};
