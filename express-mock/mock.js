const fs = require("fs");
const express = require("express");
const path = require('path');
const route = require("./route.js");
const app = express();

const routeArray = Object.keys(route);
routeArray.forEach((key) => {
    const file = path.resolve(__dirname, route[key]);
    app.use(key, function (req, res) {
        const jsonFile = fs.readFileSync(file, "utf-8");
        res.send(JSON.parse(jsonFile));
    })
})

app.listen(3000);