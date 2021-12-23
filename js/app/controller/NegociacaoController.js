class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._listaNegociacao = new ListaNegociacao();

        //pegando o id da div que esta no HTML.
        this._negociacaoView = new NegociacaoView($("#negocioesView"));
        this._negociacaoView.update(this._listaNegociacao);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        event.preventDefault();

        this._listaNegociacao.adiciona(this._adicionarFormulario());
        this._negociacaoView.update(this._listaNegociacao);

        this._mensagem.texto = "Negociação Adicionado com Sucesso!";
        this._mensagemView.update(this._mensagem);

        this._limparFormulario();
    }

    _adicionarFormulario(){
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}