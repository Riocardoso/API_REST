
//enviando uma resposta para meu cliente com seu dados...
const express = require("express");
const app = express();
//chamando dados do cliente
const data = require('./data.json');
//usando o json no express
app.use(express.json());

//pegando a requição do cliente e usando uma function como req, res..
app.get("/cliente", function(req, res){
//respondendo em forta json o dados do meu cliente
    res.json(data);
});
//inciando meu servidor...
app.listen(3000, function(){
    console.log("serve is running");
});