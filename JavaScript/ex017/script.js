var init = document.getElementById('init')
var iend = document.getElementById('iend')
var ijum = document.getElementById('ijum')
var result = document.getElementById('result')
var resultado = 0

function calculate(){
    if(init.value > iend.value){
        window.alert('Verifique os valores e tente novamente')
    } else{
        result.innerHTML = ''
        while(init.value <= iend.value){
            result.innerHTML+= init.value+" 👉🏻 "
            init = init.value + ijum.value
        }
    }
}