
const express = require("express");
const app = express();
const data = require('./data.json');
app.use(express.json());

var verbosExpress = 0
app.get("/cliente", function(req, res){

    res.json(data);
});

app.listen(3000, function(){
    console.log("serve is running");
});