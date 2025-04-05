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

function validDate(years){

let dateInput = date.value
let currentDate = new Date()
let dateObj = new Date(dateInput)

console.log("DATA DE HOJE "+currentDate)
console.log(dateObj)
if((currentDate.getFullYear() - dateObj.getFullYear()) < 16 || (currentDate.getFullYear() - dateObj.getFullYear()) > 100){

    console.log('VOCE PRECISA TER 16 ANOS OU MAIS')
    errorInput(date, 'You must be over 16 years old...')

} else {
    correctInput(date);
}
return years = currentDate.getFullYear();
}

function validateAge(age){

console.log(age.value)
console.log(years)
if(age.value == years){
    console.log('TA CEERTO')
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


