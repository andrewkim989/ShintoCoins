var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(__dirname + "/dist/ShintoCoins"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./dist/ShintoCoins/index.html"));
});

app.listen(8234, function() {
    console.log("listening on port 8234");
});