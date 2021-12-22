class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();

        //esse e para tira o erro do mes de adiciona um mes e ele retorna um mes anterior.
        let data = new Date(...this._inputData.value
            .split("-")
            .map((item,indice) => item - indice % 2 ));
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        //somente para trabalhar o formato da data.
        let diaMesAno = negociacao.data.getDay() 
        + "/" + (negociacao.data.getMonth() + 1)
        + "/" + negociacao.data.getFullYear();

        console.log(diaMesAno);
        
    }
}