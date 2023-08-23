const express = require("express");
const router = express.Router();

const authRouter = require("./api/auth");
const menRouter = require("./api/mens");
const womenRouter = require("./api/womens");
const CategoriesWomenRouter = require("./api/CategoriesWomen");
const CategoriesMenRouter = require("./api/CategoriesMen");

// http://localhost:8181/api/
router.get("/", (req, res) => {
  res.json({ msg: "sub route" });
});

//http://localhost:8181/api/register
router.get("/register", (req, res) => {
  res.json({ msg: "register" });
});

//http://localhost:8181/api/auth
router.use("/auth", authRouter);

// //http://localhost:8181/api/men
router.use("/men", menRouter);

// //http://localhost:8181/api/women
router.use("/women", womenRouter);

// //http://localhost:8181/api/CategoriesMen
router.use("/CategoriesMen", CategoriesMenRouter);

// //http://localhost:8181/api/CategoriesWomen
router.use("/CategoriesWomen", CategoriesWomenRouter);

module.exports = router;
