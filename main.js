const carteiraDigital = require('./carteiraDigital');
const carteira = new carteiraDigital();
carteira.depositar(200);
carteira.sacar(50);
const titular1 = new Titular("Fulano");
const saldo1 = new saldo(1000);
console.log(carteira.consultarSaldo());
console.log(`O saldo de ${titular1} é ${saldo}`);
carteira.exibirInformacoes();