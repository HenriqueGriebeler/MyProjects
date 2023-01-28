class Produto{

constructor(){
    this.id = 1
    this.arrayProdutos = []
}




 
salvar(){                       //FUNÇÃO INICIAL
let produto = this.lerDados()
if(this.validaCampos(produto)){
    this.adicionar(produto)
}
    this.listaTabela()
}

listaTabela(){  //BOTANDO O ITEM NA TABELA

    let tbody = document.getElementById('tbody')
    tbody.innerText = ''
    for(let i = 0; i < this.arrayProdutos.length; i++){
        var tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_produto = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_acoes = tr.insertCell();

        td_id.innerText = this.arrayProdutos[i].id
        td_produto.innerText = this.arrayProdutos[i].nomeProduto
        td_valor.innerText = this.arrayProdutos[i].valor
        

    }


}

adicionar(produto){     //ADICIONANDO O PRODUTO NO ARRAY E AUMENTANDO ID
    this.arrayProdutos.push(produto);
    this.id++
}

lerDados(){         //COLETA OS DADOS E ATRIBUI AO OBJETO produto

let produto = {}

    produto.id = this.id
    produto.nomeProduto = document.getElementById('produto').value
    produto.valor = document.getElementById('ivalue').value

    return produto;
}

validaCampos(produto){      //VERIFICA SE TODOS OS CAPOS FORAM PREENCHIDOS

    let msg = ''

    if(produto.nomeProduto == ''){
        msg += '-Não esqueça de preencher o nome \n'
   }if(produto.valor == ''){
        msg+= '-Não esqueça de preencher o valor \n'
    }
    if(msg!=''){
        alert(msg)
        return false
    }
    return true
}

deletar() {     //AÇÃO DE DELETAR OS PRODUTOS

}

}

var produto = new Produto()      //INTRODUZ TUDO