const express = require("express");
const app = express();

const routes = require("./src/routes/index.routes")
const portExec = process.env.PORT;

app.use(express.json());
app.use(routes);

// test code
let user = process.env.USER;
let pass = process.env.PASS;

console.info(`My user is ${user} and my pass is ${pass}`);

app.listen(portExec, () =>
  console.log('========== APPLICATION STARTED ==========')
);