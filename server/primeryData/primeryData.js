const User = require("../Routers/Users/userModel");
const chalk = require("chalk");
const { generateHashPassword } = require("../services/bcrypt");
const Photo = require("../Routers/Users/photoModel");

const data = {
  users: [
    {
      name: "user",
      email: "user@gmail.com",
      password: "User1234!",
      biz: false,
      likes: [],
    },
  ],
  photos: [
    {
      title: "סופגניות",
      description: "סופגניות עבור חנוכה בלבד",
      likes: [],
      _id: "6316242e8364d16b288cf017",
      image: {
        url: "http://localhost:3000/assets/images/donats.png",
        alt: "donats",
      },
    },
  ],
};

async function primaryUsers(user) {
  try {
    user = new User(user);
    user.password = generateHashPassword(user.password);
    await user.save();
  } catch (error) {
    console.log(chalk.redBright(error.message));
  }
}

async function primaryPhotos(photo) {
  try {
    const { likes, _id, image } = photo;
    const newPhoto = new Photo({ likes, _id, image });
    await newPhoto.save();
  } catch (error) {
    console.log(chalk.redBright(error.message));
  }
}

(async function () {
  try {
    for (let i of data.users) {
      await primaryUsers(i);
    }
    for (let i of data.photos) {
      await primaryPhotos(i);
    }
    console.log("Data seeded successfully");
    process.exit(0);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    process.exit(1);
  }
})();
