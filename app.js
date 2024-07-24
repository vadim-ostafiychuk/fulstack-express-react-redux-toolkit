var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const usersRouter = require("./routes/users");
const employeesRouter = require("./routes/employees");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", usersRouter);
app.use("/api/employees", employeesRouter);

module.exports = app;
