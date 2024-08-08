const express = require("express");
const connectDB = require("./Config/Db");
const dotenv = require("dotenv");
const userRoute = require("./Routes/userRoutes");
const cors = require("cors");

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods:['POST','GET','PUT','DELETE'],
    credential:true
  })
);
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
