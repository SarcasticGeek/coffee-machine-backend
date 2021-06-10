require("dotenv").config();
var mongoose = require("mongoose");
var podSeeder = require("./pods.seeder");
var machineSeeder = require("./machines.seeder");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var run = async () => {
  await machineSeeder();
  await podSeeder();
  process.exit();
};

run();