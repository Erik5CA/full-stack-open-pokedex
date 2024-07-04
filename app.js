/* eslint-disable no-undef */
const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;
// coment to test new version
// coment to test skip tag
app.use(express.static("dist"));
// Health Check Endpoint
app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
