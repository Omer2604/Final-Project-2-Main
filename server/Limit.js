const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const apiRequestLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 423000,
});

app.use(apiRequestLimiter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
