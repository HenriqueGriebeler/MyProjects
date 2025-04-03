console.log('Página carregada com sucesso')

function openForm(){
    document.getElementById('mainForm').style.display = 'block';
    document.getElementById('blurMain').style.filter = 'blur(3px)';
}

const username = document.getElementById('name');
const age = document.getElementById('age');
const date = document.getElementById('date');
const email = document.getElementById('email');


function protectFields(currentField, message){
let errorMessage = false
let atCount = 0
console.log(currentField.value.length)


for(let i = 0; i < currentField.value.length; i++){ //Begin the read of letter by letter
    
if(currentField === username){
    if(!isNaN(currentField.value[i]) || currentField.value[i] == '-' || currentField.value[i] == '=' || currentField.value[i] == '´' || currentField.value[i] == ','){
        errorMessage = true
}

else if(currentField === email){
    if(currentField.value[i] == '@'){
        atCount++
    }
}

}

if(currentField === email && atCount > 1 || currentField === email && atCount == 0){
    errorMessage = true;
}
console.log(errorMessage)
if(errorMessage){
    errorInput(currentField, message)
} else{
    correctInput(currentField)
}
}
}

function errorInput(input, message){

    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span");

    textMessage.innerText = message;

    textMessage.className = 'error-message'

}

function correctInput(input){

    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span");

    textMessage.innerText = '';

    textMessage.className = 'no-error-message'



}


