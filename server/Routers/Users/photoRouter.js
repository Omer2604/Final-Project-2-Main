const express = require("express");
const app = express();
const port = 3000;

app.get("/api/images", async (req, res) => {
  try {
    const images = await Image.find({});
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/images`);
});
