inum = window.document.getElementById('inum')
result = window.document.getElementById('result')
num = []


function calculate(){
    let canadd = true
    if(Number(inum.value) > 100 || Number(inum.value) <= 0){
        window.alert('Os valores devem estar entre 1 e 100!')
    } else {
        if(num.length == 0){
        num.push(inum.value)
        result.innerHTML+= "<br> Adicionado: "+inum.value
    } else {
        for(i in num){
        if(num[i] == inum.value)
            {
            window.alert('Número já adicionado!')
            canadd = false
            }
        }
            if(canadd == true){
            num.push(inum.value)
            result.innerHTML+= "<br> Adicionado: "+inum.value
        
        }

}
}
}

function finalize(){
    
    if(num.length==0){
        window.alert('Adicione valores para realizar a conta!')
    } else {

    var p = window.document.querySelector('p#resultados')
    p.innerHTML = ''
    
    first= 0
    soma = 0
    media = 0
    last = 0

    for(i in num){
    num.sort()
}
    first = num[0]
    p.innerHTML += '<br>O menor número foi: '+first+'<br>'
    for(i in num){
        soma+=Number(num[i])
        media+=Number(num[i])
    }
    
    last = Number(num.length)
        

    p.innerHTML += '<br>O maior número foi: '+num[last-1]+'<br>'
    p.innerHTML += '<br>A soma de todos os valores é: '+soma+'<br>'
    p.innerHTML += '<br>A media de todos os valores é: '+Number(media/num.length)+'<br>'
    }
    window.alert(num)
}

