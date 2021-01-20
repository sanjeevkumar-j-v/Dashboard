var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("Index", { title: "Home | Club Inno", page: "home" });
});

router.get("/profile", function (req, res, next) {
  res.render("Profile", { title: "Profile | Club Inno", page: "profile" });
});

router.get("/dashboard", function (req, res, next) {
  res.render("Dashboard", { title: "Dashboard | Club Inno", page: "dashboard" });
});

router.get("/ongoing-event", function (req, res, next) {
  res.render("Ongoing Event", { title: "Event | Club Inno", page: "event" });
});
router.get("/upcoming-event", function (req, res, next) {
  res.render("Upcoming Event", { title: "Event | Club Inno", page: "event" });
});
router.get("/past-event", function (req, res, next) {
  res.render("Past Event", { title: "Event | Club Inno", page: "event" });
});

router.get("/office-bearers", function (req, res, next) {
  res.render("Office Bearers", { title: "OB | Club Inno", page: "office-bearers" });
});

router.get("/contact", function (req, res, next) {
  res.render("Contact", { title: "Contact | Club Inno", page: "contact" });
});

router.get("/admin", function (req, res, next) {
  res.render("Admin", { title: "Admin | Club Inno", page: "admin" });
});


router.use("/users", require('./users'));

module.exports = router;
