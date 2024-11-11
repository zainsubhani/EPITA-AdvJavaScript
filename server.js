const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = 4000;

// custom middleware

const cors = require("cors");
const helmet = require("helmet");
// const bodyParser = require("body-parser");
app.use(cors());
app.use(helmet());
app.use(express.json());

// routes
const HelloRoutes = require("./api/todoRoutes/todoRoutes");
app.use("/", HelloRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
