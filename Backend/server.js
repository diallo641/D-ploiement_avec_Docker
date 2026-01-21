const express = require('express');
const app = express();
const path = require('path');
const port =5000;

const connexionDB= require("./config/basededonnee");
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
  res.send("API fonctionne !");
});


app.use('/api/personne', require('./route/personne'));

connexionDB();

//Ecouteur avec le port
app.listen(port ,'0.0.0.0' ,
    () => console.log("le serveur pour l'API pour Docker a demaré avecc succés! et le port est :"+ port));