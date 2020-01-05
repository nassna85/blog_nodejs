const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const mysqlConnection = require("./models/connection");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(express.static("public"));
app.use(expressLayout);
app.use("/", indexRouter);
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
