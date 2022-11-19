const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

const errorHandler = require("./middleware/errorMiddleware");

dotenv.config({ path: "./.env" });


app.use(errorHandler.errorHandler);
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
