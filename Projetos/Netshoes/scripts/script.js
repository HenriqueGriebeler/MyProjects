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