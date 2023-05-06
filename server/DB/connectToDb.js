const mongoose = require("mongoose");
const chalk = require("chalk");

const connectionString = "mongodb://localhost/final_project";
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(connectionString, connectionOptions)
  .then(() => console.log(chalk.magentaBright.bold("connected to MongoDb!")))
  .catch((error) =>
    console.log(chalk.redBright.bold(`could not connect to mongoDb: ${error}`))
  );
