const express=require("express");
const bodyParser = require("body-parser");
const dbconnect = require("./config/db");
const app= express();

const empRouter=require("./router/empRouter");

const dotenv = require("dotenv").config();
const PORT=process.env.PORT|| 4000

dbconnect();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/emp", empRouter);
app.listen(PORT, () => {
    console.log(`server is running at Port ${PORT}`);
  });