var usuario = 'Administrador'
var user =  document.getElementById('user')
var empresa = 'AH Master eletrônicos'
var empLoc = document.getElementById('vers')
var menu = document.getElementById('menuOp')

user.innerHTML += usuario
empLoc.innerHTML += empresa


function menuAction(){

if(menu.style.display=='block'){
    menu.style.display='none'
} else {
    menu.style.display='block'
}

}