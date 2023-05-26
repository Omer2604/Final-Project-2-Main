require("./DB/connectToDb");
const express = require("express");
const app = express();
// const imagesRouter = require("./Routers/Images/imageRouter");
const authorizationMiddleware = require("./middlewares/authorizationMiddleware");

const usersRouter = require("./Routers/Users/userRouter");
const chalk = require("chalk");
const morgan = require("morgan");
const cors = require("cors");

app.use(morgan(chalk.cyan(":method :url :status :response-time ms")));
app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);
const passwordRouter = require("./Routers/Users/NewPassword");
app.use("/api/users", passwordRouter);
// app.use("/api/images", imagesRouter);
app.get("/protected-route", authorizationMiddleware, (_req, _res) => {});

const PORT = 8181;
app.listen(PORT, () =>
  console.log(chalk.blueBright.bold(`server run on: http://localhost:${PORT}`))
);
