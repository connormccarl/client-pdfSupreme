const express = require("express");
const request = require("request");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server started"));

app.use(express.static("build"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const items = [
    {
        name: "Laptop",
        price: 500,
    },
    {
        name: "Desktop",
        price: 700,
    }
]

app.get("/api/items", (req, res) => {
    res.send(items);
})

app.get("/api/merge-pdf", function(req, res, next){
    console.log("Hit /api/merge-pdf");

    request({
        uri: 'https://pdfapi-zdtz.onrender.com/merge-pdf'
    }).pipe(res);
});