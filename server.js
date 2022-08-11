const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./.env" });



app.use((req, res, next) => {
  // console.log(req.path, req.method);
  console.log(process.env.MONG_URL)
  next();
});


mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and runing on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
