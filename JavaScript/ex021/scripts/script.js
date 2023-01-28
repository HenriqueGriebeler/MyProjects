class Produto{

constructor(){
    this.id = 1
    this.arrayProdutos = []
}




 
salvar() {
let produto = this.lerDados()

}
lerDados(){

let produto = {}

    produto.id = this.id
    produto.nomeProduto = document.getElementById('produto').value
    produto.valor = document.getElementById('ivalue').value

    return produto;
}

deletar() {

}

}

var produto = new Produto()