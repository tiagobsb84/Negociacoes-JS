class DataHelper {

    constructor(){
        throw new Error("DataHelper não pode ser instanciada");
    }

    //esse metodo e para converter um objeto em uma string. E para retornar o mes correto
    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error("Deve estar no formato YYYY-mm-dd");

        return new Date(...texto.split("-").map((item,indice) => item - indice % 2 ));
    }

    //Esse metodo para formato da data.
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}