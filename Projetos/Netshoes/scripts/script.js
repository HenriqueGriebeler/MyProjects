var bigMenu = document.getElementById('bigMenu')

function openBigMenu(){

    bigMenu.style.display = 'block'
}
 /* DEVO CRIAR O X PARA FECHAR AO CLICAR NELE NA DIREITA ELE PODE SER UM  position:absolute*/


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



/* DEVO TAMBÉM COLOCAR OS ICONES DAS CETAS */