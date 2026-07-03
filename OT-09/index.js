import Express from 'express';

const app = Express();

var carros = ['fiesta', 'saveiro'];

app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) => 
    res.send("<h3>Rotas no Express</h3>Rota '/'")
);

app.get('/sobre', (req, res) =>
    res.send("<h3>Rotas no Express</h3>Vamos aprender a utilizar rotas no Express")
);

app.get('/user/:name', (req, res) => //recebe o parâmetro name
    res.send('Usuário:' + req.params.name) //exibe o parâmetro name
);

app.post('/cars/', (req, res) => {
    let name = req.body && req.body.name;

    if (!name) {
        return res.status(400).json({ erro: 'Envie name em x-www-form-unlercoded'});
    }

    carros[(carros.length)] = name;
    return res.json([carros[(carros.length - 1)]]);
});

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;

    if(isNaN(id)) {
        id = carros.indexOf(id);
    }

    if(id < 0 || carros[id] === undefined) {
        return res.status(404).json({ erro: 'Carro não encontrado'});
    }

    return res.json([carros[id]])
});

app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null; // deletar item
    return res.json(carros[id]);
});

app.listen(3000, () =>
    console.log('Servidor iniciado na porta 3000')
);