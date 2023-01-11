var init = document.getElementById('init')
var iend = document.getElementById('iend')
var ijum = document.getElementById('ijum')
var result = document.getElementById('result')
var resultado = 0

function calculate(){
    if(Number(init.value) >= Number(iend.value)){
        window.alert('Verifique os valores e tente novamente')
    } else{
        result.innerHTML = init.value+' 👉🏻'
        while(Number(init.value) <= Number(iend.value)){
            init.value = Number(init.value) + Number(ijum.value)
            result.innerHTML+= " "+init.value+" 👉🏻"
        } 
        result.innerHTML+=" 🧐"
    }
}