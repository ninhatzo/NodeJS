import colecaoUf from '../dados/dados.js';

// Retorno de toda a coleção
export const buscarUfs = () => {
    return colecaoUf;
};

// Busca de UF através do nome
export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.toLowerCase().includes(nomeUf.toLowerCase()));
};

// Retorno da UF de ID específico
export const buscarUfPorId = (id) => {
    const idUf = parseInt(int);
    return colecaoUf.find(uf => uf.id === ifUf);
};