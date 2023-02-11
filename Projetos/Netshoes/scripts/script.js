/** INICIO DAS CONFIGUREAÇÕES DO MENU */


var bigMenu = document.getElementById('bigMenu')

function openBigMenu(){

    bigMenu.style.display = 'block'
}
 
function closeBigMenu(){

    bigMenu.style.display = 'none'

}


function openMinMenu(a){
    
    allMenus = document.getElementsByClassName('closeMenus')
 
    if(a == 1){
        x = document.getElementById('imundial')
    } else if(a == 2){
        x = document.getElementById('ioutlet')
    }
    
    if(x.style.display == 'block'){
        x.style.display = 'none'
    } else {
        for(i = 0; i < allMenus.length; i++){
            allMenus[i].style.display = 'none';
        }
        x.style.display = 'block'
        }
    
}

/** FINAL DAS CONFIGUREAÇÕES DO MENU */

function handleImageUpload() {

var image = document.getElementById("upload").files[0];

    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("display-image").src = e.target.result;
    }

    reader.readAsDataURL(image);

} 

function send(){

var productName = document.getElementById('inome')
var productPrice = document.getElementById('iprice')
var productImage = document.getElementById('upload')
var productSRC = document.getElementById('display-image')

let aviso = ''

if(productName.value == ""){
    aviso += 'Não esqueça de preencher o nome\n'
}
if(productPrice.value == ""){
    aviso += 'Não esqueça de preencher o preço\n'
}
if(productImage.value == ""){
    aviso += 'Não esqueça de enviar uma imagem\n'
}
if(aviso != ''){
    alert(aviso)
} else if(aviso == ''){

//CONFIGURANDO OS PARAMETROS PARA O OBJETO PRODUTO
    //FALTA ADICIONAR ELES AO OBJETO AGORA
produto = new Produto()
produto.load(productName, productPrice, productImage, productSRC)


//CLEAR NEEDS TO BE THE LAST COMMAND
clear(productName, productPrice, productImage, productSRC)

}
}

function clear(a, b, c, d){

    a.value = ''
    b.value = ''
    c.value = ''
    d.src = ''

}

class Produto{

    constructor(){
        this.arrayProduct = []
    }

    load(a,b,c,d){

        let produto = this.getElements(a,b,c,d)
        this.test(produto)

    }

    getElements(pdName, pdPrice, pdImage, pdSRC){

        let produto = {}

        produto.productName = pdName.value
        produto.productPrice = pdPrice.value
        produto.productImage = pdImage.value
        produto.productSRC = pdSRC.value

        return produto

    } test(produto){
        alert(produto.productName)
    }
    
}