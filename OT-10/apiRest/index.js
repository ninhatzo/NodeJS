import express from 'express';
import colecaoUf from './dados/dados.js';

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
});

/*app.get('/ufs/teste', (req, res) => {
    res.send({ "teste": "teste" })
}
);*/

app.get('/ufs/:iduf', (req, res) => {
    const idUf = parseInt(req.params.iduf);
    const uf = colecaoUf.find(u => u.id === idUf);

res.json(uf);
}
);

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});