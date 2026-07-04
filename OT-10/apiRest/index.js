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
    let mensagemErro= '';
    let uf;

    if (!(isNaN(idUf))) {
        uf = colecaoUf.find(u => u.id === idUf);
        if (!uf) {
            mensagemErro = 'UF não encontrada';
        } else {
            mensagemErro = 'Rquisição inválida';
        }
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404). send({"erro": mensagemErro });
    }
}
);

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});