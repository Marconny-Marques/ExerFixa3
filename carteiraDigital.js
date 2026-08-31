class carteiraDigital{
    #titular
    #saldo

    set definirTitular(titular) {
        if(typeof titular != "string" || titular.trim() === "") {
            console.error("O titular deve cadastrar um nome válido")
            return false;
        }
        return this.#titular = titular.trim();
    }

    get consultarTitular(titular) {
        return this.#titular = titular;
    }

    get depositarValor(saldo) {
        return this.#saldo = saldo;
    }

    set sacar(valor) {
        return this.#saldo = saldo;
    }

    get consultarSaldo(saldo) {
        return this.#saldo = saldo;
    }

    get exibirInformacoes() {

    }
}
module.exports = carteiraDigital;