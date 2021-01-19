var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home | Club Inno' });
});

router.get("/dashboard", function (req, res, next) {
  res.render("index", { title: "Dashboard | Club Inno" });
});

module.exports = router;
