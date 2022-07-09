"use strict";

const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const cookieRoutes = require('./routes/cookies.routes')
const PORT = 4500;

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("src", "public")))

app.use('/',cookieRoutes)

app.listen(PORT, () => console.log("servidor iniciado en ", PORT));
