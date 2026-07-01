// Carregando o express
const express = require("express");

// Instanciando o express e carregando a biblioteca do express dentro dessa const app
const app = express();
app.use(express.json());

app.post("/novogame", (req, res) => {

    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    // Cria o objeto
    let newGame = {
        title,
        studio,
        price
    };

    // Adiciona na lista
    games.push(newGame);

    // Envia a resposta
    res.send("OK");
});

// Lista de Games

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "Grand Theft Auto V", studio: "Rockstar", price: 150},
    {title: "Cyberpunk 2077", studio: "CD", price: 200},
    {title: "Hollow Knight", studio: "Team Cherry", price: 45},
    {title: "Hades", studio: "Supergiant", price: 75},
    {title: "Stardew Valley", studio: "ConcernedApe", price: 25},
]

app.listen(3080,() => {
    console.log("Servidor rodando!");
});

app.get("/", (req,res) => {
    res.json(games);
});