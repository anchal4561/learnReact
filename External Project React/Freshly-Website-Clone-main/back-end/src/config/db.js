
const mongoose = require("mongoose");
const url =
  process.env.DATABASE_URL ;
//   local
 const localUrl = "mongodb://127.0.0.1:27017/";
const connection = () => {
  mongoose
    .connect(`${localUrl}sophisticated-legs-486`)
    .then(() => {
      console.log("Connection Successful!");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connection;
