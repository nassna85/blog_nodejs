const express = require("express");
const router = express.Router();
const mysqlConnection = require("../models/connection");

// Homepage
router.get("/", (req, res) => {
  const sql = "SELECT * from article";
  mysqlConnection.query(sql, (error, articles) => {
    if (!error) {
      console.log(articles);
      res.render("home/homepage", {
        title: "Accueil",
        articles: articles
      });
    } else {
      console.log(error);
    }
  });
});

//Single Article
router.get("/article/:id", (req, res) => {
  const sql = `SELECT * FROM article WHERE id = ${req.params.id}`;
  mysqlConnection.query(sql, (error, article) => {
    if (!error) {
      console.log(article[0].title);
      res.render("articles/show", {
        article: article[0],
        title: article[0].title
      });
    } else {
      console.log(error);
    }
  });
});

// Contact
router.get("/contact", (req, res) => {
  res.render("contact/contact", {
    title: "Contact"
  });
});

module.exports = router;
