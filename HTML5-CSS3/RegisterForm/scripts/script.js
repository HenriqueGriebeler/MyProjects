console.log('Página carregada com sucesso')

function openForm(){
    document.getElementById('mainForm').style.display = 'block';
    document.getElementById('blurMain').style.filter = 'blur(3px)';
}

const username = document.getElementById('name');
const age = document.getElementById('age');
const date = document.getElementById('date');
const email = document.getElementById('email');


function nameProtect(){
console.log('Função chamada')
console.log(username.value.length)
for(let i = 0; i < username.value.length; i++){
    
    if(!isNaN(username.value[i]) || username.value[i] == '-' || username.value[i] == '=' || username.value[i] == '´' || username.value[i] == ','){
        errorInput(username, 'Preencha apenas com letras...')
    console.log('errou')}
    
}

}


function errorInput(input, message){

    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span");

    textMessage.innerText = message;

    textMessage.className = 'error-message'

}


