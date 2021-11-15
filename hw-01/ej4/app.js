const express = require("express");
const app = express();
const port = 3000;

let error = false;
let status = 200;
const minutes = 2 * 60 * 1000;
setTimeout(() => {
  if (!error) {
    status = 500;
  }
}, minutes);

app.get("/", (req, result) => {
  result.send("This is exercise 4");
});

app.get("/health", (req, result) => {
  result.status(status).send("Status");
});

app.listen(port, () => {
});
