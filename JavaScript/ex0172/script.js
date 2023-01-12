let a = window.document.getElementById('inum')
let text = document.getElementById('result')

function calculate(){
    text.innerHTML = ''
    text.style.display = 'block'
    text.innerHTML+= '<br>Tabuada<br>'

    for(var i = 0; i < 10; i++){
        var x = 0
        var d = i+1
        x = Number(a.value) * d
        text.innerHTML+= '<br>'+a.value+' X '+d+' = '+x+'<br>'

    }
}
