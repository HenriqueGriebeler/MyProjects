let id = 1;

function adicionarItem() {
    var novoItem = document.getElementById("inputItem").value;

    if (novoItem.trim() !== "") {
        document.getElementById('sendClotes').style.display = 'block';
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(novoItem));

        var btnEditar = document.createElement("button");
        btnEditar.appendChild(document.createTextNode("Editar"));
        btnEditar.onclick = function() { editarItem(li); };

        var btnExcluir = document.createElement("button");
        btnExcluir.appendChild(document.createTextNode("Excluir"));
        btnExcluir.onclick = function() { excluirItem(li); };

        li.appendChild(btnEditar);
        li.appendChild(btnExcluir);

        document.getElementById("listaItens").appendChild(li);
        document.getElementById("inputItem").value = "";
    } else {
        alert("Ops, faltou digitar qual a roupa a ser doada!");
    }
}

function editarItem(item) {
    var novoTexto = prompt("Digite o novo texto:", item.firstChild.nodeValue);
    if (novoTexto !== null) {
        item.firstChild.nodeValue = novoTexto;
    }
}

function excluirItem(item) {
    
        item.parentNode.removeChild(item);
    
}

function save(){

    clotes = document.getElementById('listaItens').innerHTML;

    localStorage.setItem("clotes", clotes);
    console.log(clotes)

}