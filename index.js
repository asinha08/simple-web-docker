const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Ashish Sinha");
});

app.listen(8080, () => {
    console.log("Node Web server is running on port 8080");
})