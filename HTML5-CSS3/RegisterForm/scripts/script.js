console.log('Página carregada com sucesso')

function openForm(){
    document.getElementById('mainForm').style.display = 'block';
    document.getElementById('blurMain').style.filter = 'blur(3px)';
}

const username = document.getElementById('name');
const age = document.getElementById('age');
const date = document.getElementById('date');
const email = document.getElementById('email');

 /*username.addEventListener('keydown', (a) => {
        console.log(a.key)
    if(!/^[a-zA-Z]$/.test(a.key) && a.key != 'Shift' && a.key != ' ' && a.key != 'Backspace' && a.key != 'Dead' && a.key != 'é' && a.key != 'ç' && a.key != 'ú' && a.key != 'á' && a.key != 'ã'){ //TESTA SE O QUE FOI DIGITADO ESTA ENTRE a-z e A-Z
        console.log('Apenas letras!')
        document.getElementById('name_message_error').style.visibility = 'visible';
    
    }
        
})*/

function nameProtect(){
console.log('Função chamada')
console.log(username.value)
console.log(username.value.size)
/*for(let i = 0; i < username.size; i++){
    console.log('For iniciado')
    if(!isNaN(username[i])){
        alert('DETECTADA COISA ERRADA')
    }
    
}*/

}



