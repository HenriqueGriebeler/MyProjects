/** INICIO DAS CONFIGUREAÇÕES DO MENU */


var bigMenu = document.getElementById('bigMenu')

function openBigMenu(){

    //COLOCAR DEPOS UMA FUNÇÃO PARA NÃO ROLAR A TELA
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
        this.id = 0

    }

    load(a,b,c,d){

        let produto = this.getElements(a,b,c,d)
        this.importArray(produto)
        this.showProduct()
        

    }

    getElements(pdName, pdPrice, pdImage, pdSRC){

        let produto = {}

        produto.id = this.id
        produto.productName = pdName.value
        produto.productPrice = pdPrice.value
        produto.productImage = pdImage.value
        produto.productSRC = pdSRC.src
        
        return produto

    } importArray(produto){

        this.arrayProduct.push(produto)
        this.id++
        
    } 

    showProduct(){

        var productArea = document.getElementById('productsArea')
        this.clear(productArea)
        for(let i = 0; i < this.arrayProduct.length; i++){

            let area = document.createElement('div')
            area.setAttribute('class', 'products')
            area.innerHTML += '<img src="'+this.arrayProduct[i].productSRC+'" alt="IMG">\n'
            area.innerHTML += '<p>'+this.arrayProduct[i].productName+'</p>\n'
            area.innerHTML += '<p>'+this.arrayProduct[i].productPrice+'</p>\n'

            productArea.appendChild(area)
            document.getElementById('productsMain').style.display = 'block'


        }

        
    }
    clear(productArea) {
        productArea.innerHTML = ''
    }
    
} var produto = new Produto()