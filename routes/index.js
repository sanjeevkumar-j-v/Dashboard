var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", { title: "Home | Club Inno", page: "home" });
});

router.get("/profile", function (req, res, next) {
  res.render("profile", { title: "Profile | Club Inno", page: "profile" });
});

router.get("/dashboard", function (req, res, next) {
  res.render("dashboard", { title: "Dashboard | Club Inno", page: "dashboard" });
});

router.get("/ongoing-event", function (req, res, next) {
  res.render("ongoing event", { title: "Event | Club Inno", page: "event" });
});
router.get("/upcoming-event", function (req, res, next) {
  res.render("upcoming event", { title: "Event | Club Inno", page: "event" });
});
router.get("/past-event", function (req, res, next) {
  res.render("past event", { title: "Event | Club Inno", page: "event" });
});

router.get("/office-bearers", function (req, res, next) {
  res.render("office bearers", { title: "OB | Club Inno", page: "office-bearers" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact | Club Inno", page: "contact" });
});

router.get("/admin", function (req, res, next) {
  res.render("admin", { title: "Admin | Club Inno", page: "admin" });
});


router.use("/users", require('./users'));

module.exports = router;
