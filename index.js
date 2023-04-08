const express = require("express");
const app = express();

const routes = require("./src/routes/index.routes")
const portExec = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(portExec, () =>
  console.log('========== APPLICATION STARTED ==========')
);