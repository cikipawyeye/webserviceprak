let express = require("express");
let router = express.Router();

router.get('/', function (req, res, next) {
    res.send("List Courses");
});

module.exports = router;