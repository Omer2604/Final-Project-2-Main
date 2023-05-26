const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/your-database-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: String,
  src: String,
  alt: String,
  description: String,
  prices: [
    {
      diameter: Number,
      price: Number,
    },
  ],
});

const Image = mongoose.model("Image", ImageSchema);

const image = new Image({
  name: "alphaphores",
  src: "/assets/images/alphaphores.png",
  alt: "alphaphores",
  description: "עוגת מוס אלפחורס וריבת חלב",
  prices: [{ diameter: 20 / 22 / 24, price: 250 / 300 / 350 }],
});

image.save((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Image document saved successfully!");
  }
});
