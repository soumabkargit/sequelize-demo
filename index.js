//import express from "express";
const express = require("express");
const consign = require("consign");

// import consign from "consign";

 const app = express();

consign()
 .include("libs/config.js")
 .then("db.js")
 .then("libs/middlewares.js")
 .then("routes")
 .then("libs/boot.js")
 .into(app);