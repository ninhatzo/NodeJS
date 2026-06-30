// Instanciamos o objeto Date
let data = new Date();

// Utilizamos a instancia para recuparar a hora e os minutos
let hora = data.getHours();
let min = data.getMinutes();

let saudacao;
// Definimos a mensagem de saudação de acordo com a hora do dia

if (hora <= 11) {
    saudacao = "Bom dia!";
} else if (hora <= 17) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

console.log('Olá' + saudacao);
console.log('Agora são ' + hora + ' horas e ' + min + ' minutos.');