class MensagemView extends View {
    constructor(elemento){
        super(elemento);
    }

    template(model){
        return model.texto ? `<p classe="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
}