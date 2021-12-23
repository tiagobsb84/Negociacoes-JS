class ListaNegociacao {
    constructor(){
        this._negociacao = [];
    }

    adiciona(negociacao){
        this._negociacao.push(negociacao);
    }

    get negociacao(){
        /*concat -> usamos para concatenar, ou seja esse retorno ele vai blindar as alterações que fizerem no arquivo controller,
        trazendo uma nova lista.*/
        return[].concat(this._negociacao);
    }
}