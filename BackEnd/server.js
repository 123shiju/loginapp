const express = require("express");
const connectDB = require("./Config/Db");
const dotenv = require("dotenv");
const userRoute = require("./Routes/userRoutes");
const cors = require("cors");

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors({
  origin: "https://loginapp-client.vercel.app",
   methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use("/api", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
