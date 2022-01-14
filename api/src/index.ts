require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const appRoutes = require("./routes/index.ts");
const logger = require("./utils/logger");

  // create express app
  const app = express();
  app.use(bodyParser.json());
  const corsOption = {
    headers: "Origin, X-Requested-With, Content-Type, Accept, Authorization ",
    methods: "GET,POST",
    origin: "*",
  };

  app.use(cors(corsOption));
  app.use("/api", appRoutes);

  // run app
  app.listen(process.env.PORT || 3400);

  logger.info(`API server is running at http://localhost:${process.env.PORT} in ${app.get("env")} mode.`);
  logger.info("Press CTRL-C to stop.");
