const express = require("express");
const app = express();
const router = express.Router();

const PORT = 3000;

// custom middleware

const cors = require("cors");
const helmet = require("helmet");
// const bodyParser = require("body-parser");
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/", router);

// routes
router.get("/hello", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
