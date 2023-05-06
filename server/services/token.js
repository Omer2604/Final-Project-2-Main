const jwt = require("jsonwebtoken");
const config = require("config");

const jwtKey = config.get("jwtKey");

if (!jwtKey) {
  throw new Error("FATAL ERROR: jwtKey is not defined.");
}

function generateAuthToken(user) {
  const token = jwt.sign(
    { _id: user._id, biz: user.biz, isAdmin: user.isAdmin },
    jwtKey
  );
  return token;
}

function verifyToken(tokenFromUser) {
  try {
    const userData = jwt.verify(tokenFromUser, jwtKey);

    return userData;
  } catch (error) {
    return null;
  }
}

module.exports = { generateAuthToken, verifyToken };
