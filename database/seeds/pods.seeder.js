var Type = require("../../app/models/type.model");
var Flavor = require("../../app/models/flavor.model");
var Size = require("../../app/models/size.model");
var Pod = require("../../app/models/pod.model");

module.exports = () => {
  try {
    return new Promise(async (resolve, reject) => {
      await Flavor.deleteMany({}, () => {});
      await Size.deleteMany({}, () => {});
      await Pod.deleteMany({}, () => {});

      const large = new Type({
        product_type: "COFFEE_POD_LARGE"
      });
      await large.save();

      const small = new Type({
        product_type: "COFFEE_POD_SMALL"
      });
      await small.save();

      const espresso = new Type({
        product_type: "ESPRESSO_POD"
      });
      await espresso.save();

      const vanilla = new Flavor({
        flavor: "COFFEE_FLAVOR_VANILLA"
      });
      await vanilla.save();

      const caramel = new Flavor({
        flavor: "COFFEE_FLAVOR_CARAMEL"
      });
      await caramel.save();

      const psl = new Flavor({
        flavor: "COFFEE_FLAVOR_PSL"
      });
      await psl.save();

      const mocha = new Flavor({
        flavor: "COFFEE_FLAVOR_MOCHA"
      });
      await mocha.save();

      const hazelnut = new Flavor({
        flavor: "COFFEE_FLAVOR_HAZELNUT"
      });
      await hazelnut.save();

      const oneDozen = new Size({
        pack_size: "1 dozen"
      });
      await oneDozen.save();

      const threeDozen = new Size({
        pack_size: "3 dozen"
      });
      await threeDozen.save();

      const fiveDozen = new Size({
        pack_size: "5 dozen"
      });
      await fiveDozen.save();

      const sevenDozen = new Size({
        pack_size: "7 dozen"
      });
      await sevenDozen.save();

      await Pod.insertMany([
        {
          sku: "CP001",
          description: "small coffee pod, 1 dozen, vanilla",
          product_type_id: small.id,
          product_type: small.product_type,
          coffee_flavor_id: vanilla.id,
          coffee_flavor: vanilla.flavor,
          pack_size_id: oneDozen.id,
          pack_size: oneDozen.pack_size
        },
        {
          sku: "CP003",
          description: "small coffee pod, 3 dozen, vanilla",
          product_type_id: small.id,
          product_type: small.product_type,
          coffee_flavor_id: vanilla.id,
          coffee_flavor: vanilla.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "CP011",
          description: "small coffee pod, 1 dozen, caramel",
          product_type_id: small.id,
          product_type: small.product_type,
          coffee_flavor_id: caramel.id,
          coffee_flavor: caramel.flavor,
          pack_size_id: oneDozen.id,
          pack_size: oneDozen.pack_size
        },
        {
          sku: "CP013",
          description: "small coffee pod, 3 dozen, caramel",
          product_type_id: small.id,
          product_type: small.product_type,
          coffee_flavor_id: caramel.id,
          coffee_flavor: caramel.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "CP021",
          description: "small coffee pod, 1 dozen, psl",
          product_type_id: small.id,
          product_type: small.product_type,
          coffee_flavor_id: psl.id,
          coffee_flavor: psl.flavor,
          pack_size_id: oneDozen.id,
          pack_size: oneDozen.pack_size
        },
        {
          sku: "CP023",
          description: "small coffee pod, 3 dozen, psl",
          product_type_id: small.id,
          product_type: small.product_type,
          coffee_flavor_id: psl.id,
          coffee_flavor: psl.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "CP031",
          description: "small coffee pod, 1 dozen, mocha",
          product_type_id: small.id,
          product_type: small.product_type,
          coffee_flavor_id: mocha.id,
          coffee_flavor: mocha.flavor,
          pack_size_id: oneDozen.id,
          pack_size: oneDozen.pack_size
        },
        {
          sku: "CP033",
          description: "small coffee pod, 3 dozen, mocha",
          product_type_id: small.id,
          product_type: small.product_type,
          coffee_flavor_id: mocha.id,
          coffee_flavor: mocha.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "CP041",
          description: "small coffee pod, 1 dozen, hazelnut",
          product_type_id: small.id,
          product_type: small.product_type,
          coffee_flavor_id: hazelnut.id,
          coffee_flavor: hazelnut.flavor,
          pack_size_id: oneDozen.id,
          pack_size: oneDozen.pack_size
        },
        {
          sku: "CP043",
          description: "small coffee pod, 3 dozen, hazelnut",
          product_type_id: small.id,
          product_type: small.product_type,
          coffee_flavor_id: hazelnut.id,
          coffee_flavor: hazelnut.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "CP101",
          description: "large coffee pod, 1 dozen, vanilla",
          product_type_id: large.id,
          product_type: large.product_type,
          coffee_flavor_id: vanilla.id,
          coffee_flavor: vanilla.flavor,
          pack_size_id: oneDozen.id,
          pack_size: oneDozen.pack_size
        },
        {
          sku: "CP103",
          description: "large coffee pod, 3 dozen, vanilla",
          product_type_id: large.id,
          product_type: large.product_type,
          coffee_flavor_id: vanilla.id,
          coffee_flavor: vanilla.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "CP111",
          description: "large coffee pod, 1 dozen, caramel",
          product_type_id: large.id,
          product_type: large.product_type,
          coffee_flavor_id: caramel.id,
          coffee_flavor: caramel.flavor,
          pack_size_id: oneDozen.id,
          pack_size: oneDozen.pack_size
        },
        {
          sku: "CP113",
          description: "large coffee pod, 3 dozen, caramel",
          product_type_id: large.id,
          product_type: large.product_type,
          coffee_flavor_id: caramel.id,
          coffee_flavor: caramel.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "CP121",
          description: "large coffee pod, 1 dozen, psl",
          product_type_id: large.id,
          product_type: large.product_type,
          coffee_flavor_id: psl.id,
          coffee_flavor: psl.flavor,
          pack_size_id: oneDozen.id,
          pack_size: oneDozen.pack_size
        },
        {
          sku: "CP123",
          description: "large coffee pod, 3 dozen, psl",
          product_type_id: large.id,
          product_type: large.product_type,
          coffee_flavor_id: psl.id,
          coffee_flavor: psl.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "CP131",
          description: "large coffee pod, 1 dozen, mocha",
          product_type_id: large.id,
          product_type: large.product_type,
          coffee_flavor_id: mocha.id,
          coffee_flavor: mocha.flavor,
          pack_size_id: oneDozen.id,
          pack_size: oneDozen.pack_size
        },
        {
          sku: "CP133",
          description: "large coffee pod, 3 dozen, mocha",
          product_type_id: large.id,
          product_type: large.product_type,
          coffee_flavor_id: mocha.id,
          coffee_flavor: mocha.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "CP141",
          description: "large coffee pod, 1 dozen, hazelnut",
          product_type_id: large.id,
          product_type: large.product_type,
          coffee_flavor_id: hazelnut.id,
          coffee_flavor: hazelnut.flavor,
          pack_size_id: oneDozen.id,
          pack_size: oneDozen.pack_size
        },
        {
          sku: "CP143",
          description: "large coffee pod, 3 dozen, hazelnut",
          product_type_id: large.id,
          product_type: large.product_type,
          coffee_flavor_id: hazelnut.id,
          coffee_flavor: hazelnut.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "EP003",
          description: "espresso pod, 3 dozen, vanilla",
          product_type_id: espresso.id,
          product_type: espresso.product_type,
          coffee_flavor_id: vanilla.id,
          coffee_flavor: vanilla.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "EP005",
          description: "espresso pod, 5 dozen, vanilla",
          product_type_id: espresso.id,
          product_type: espresso.product_type,
          coffee_flavor_id: vanilla.id,
          coffee_flavor: vanilla.flavor,
          pack_size_id: fiveDozen.id,
          pack_size: fiveDozen.pack_size
        },
        {
          sku: "EP007",
          description: "espresso pod, 7 dozen, vanilla",
          product_type_id: espresso.id,
          product_type: espresso.product_type,
          coffee_flavor_id: vanilla.id,
          coffee_flavor: vanilla.flavor,
          pack_size_id: sevenDozen.id,
          pack_size: sevenDozen.pack_size
        },
        {
          sku: "EP013",
          description: "espresso pod, 3 dozen, caramel",
          product_type_id: espresso.id,
          product_type: espresso.product_type,
          coffee_flavor_id: caramel.id,
          coffee_flavor: caramel.flavor,
          pack_size_id: threeDozen.id,
          pack_size: threeDozen.pack_size
        },
        {
          sku: "EP015",
          description: "espresso pod, 5 dozen, caramel",
          product_type_id: espresso.id,
          product_type: espresso.product_type,
          coffee_flavor_id: caramel.id,
          coffee_flavor: caramel.flavor,
          pack_size_id: fiveDozen.id,
          pack_size: fiveDozen.pack_size
        },
        {
          sku: "EP017",
          description: "espresso pod, 7 dozen, caramel",
          product_type_id: espresso.id,
          product_type: espresso.product_type,
          coffee_flavor_id: caramel.id,
          coffee_flavor: caramel.flavor,
          pack_size_id: sevenDozen.id,
          pack_size: sevenDozen.pack_size
        }
      ]);

      resolve(console.log("Pods seed completed!"));
    });
  } catch (e) {
    console.log(e.message);
  }
};
