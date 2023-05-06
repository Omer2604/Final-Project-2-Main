const chalk = require("chalk");

const { verifyToken } = require("../services/token");

function authorizationMiddlware(req, res, next) {
  const tokenFromClient = req.header("x-auth-token");

  if (!tokenFromClient) {
    console.log(
      chalk.redBright("Authorization Error: User did not send token!")
    );
    return res.status(401).json("Please Login");
  }

  try {
    const userInfo = verifyToken(tokenFromClient);
    req.user = userInfo;
    return next();
  } catch (error) {
    console.log(chalk.redBright("Authorization Error: Invalid Token!"));
    return res.status(401).json("Invalid Token!");
  }
}

module.exports = authorizationMiddlware;
