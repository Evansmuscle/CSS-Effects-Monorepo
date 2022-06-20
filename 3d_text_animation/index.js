const path = require("path");
const express = require("express");

const port = 4000;
const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
