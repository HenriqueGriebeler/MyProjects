let fn = false

function keyboard(){ 

  document.getElementById('keyboardBody').style.display = 'block';
  
}



text = document.getElementById('text')
keys = []

function type(a){

if(a == 'invertedBar'){

  keys.push(String.fromCharCode(92)); //93
  text.value = keys.join('')

} else if(a == 'rightBracket'){

  keys.push(String.fromCharCode(93));
  text.value = keys.join('')

} else if(a == 'aspasDuplas'){

  keys.push(String.fromCharCode(34))
  text.value = keys.join('')

} else if(a == 'leftBracket'){

  keys.push(String.fromCharCode(91));
  text.value = keys.join('')

} else if(a == 'accent'){

  keys.push(String.fromCharCode(39));
  text.value = keys.join('')

} else if(a == 'parentheses'){

  keys.push(String.fromCharCode(40))
  text.value = keys.join('')
  
} else if(a == 'rightParentheses'){

  keys.push(String.fromCharCode(41))
  text.value = keys.join('')
  
} else if(a == 'leftKey'){

  keys.push('{')
  text.value = keys.join('')
  
} else if(a == 'rightKey'){

  keys.push('}')
  text.value = keys.join('')
  
} else{

if(shift == false && capsLock == false || shift == true && capsLock == true){
  keys.push(a.toLowerCase())
}else{
  keys.push(a.toUpperCase())
}
text.value = keys.join('')
}
if(capsLock == false && shift == true){
  shiftOff()
  }
} 

function clean(){

  keys = []
  text.value = keys.join('')

} function enter(){
keys.push('\n')
text.value = keys.join('');

} function Bks(){

keys.pop()
text.value = keys.join('');

} 

let shift = false;

function shiftOn(){
  
 if(shift == false){ 

  //capsLock = false
  //capsOff()
  shift = true;

    //Troca a cor do botão shift

document.getElementById('shift').style.backgroundColor = '#4e4e4e'
document.getElementById('rightShift').style.backgroundColor = '#4e4e4e'

  // ESCONDE OS NUMEROS E MOSTRA OS SINAIS:

document.getElementById('numeric').style.display = 'none';
document.getElementById('specialNumeric').style.display = 'flex';

  // Seleciona todos os elementos com a classe 'normalKey'

var allNormalKeys = document.querySelectorAll('.normalKeyPosition');

allNormalKeys.forEach(function(allNormalKey) {
    
  allNormalKey.textContent = allNormalKey.textContent.toUpperCase();

})

//ALTERANDO TECLAS ESPECIAIS

document.getElementById('normalAccent').style.display = 'none';
document.getElementById('invertedAccent').style.display = 'flex';

document.getElementById('leftBracket').style.display = 'none';
document.getElementById('leftKey').style.display = 'flex';

document.getElementById('rightBracket').style.display = 'none';
document.getElementById('rightKey').style.display = 'flex';

document.getElementById('comma').style.display = 'none';
document.getElementById('leftArrow').style.display = 'flex';

document.getElementById('point').style.display = 'none';
document.getElementById('rightArrow').style.display = 'flex';

  //SE CAPS ESTIVER ATIVO ELE VAI DIMINUIR AS LETRAS

if(capsLock == true){

  allNormalKeys.forEach(function(allNormalKey){

    allNormalKey.textContent = allNormalKey.textContent.toLowerCase();

  })


}} else { 

 shiftOff() 
  
}
} function shiftOff(){

  shift = false
  //capsLock = false
  //capsOff()

  //Faz a cor do botão voltar ao normal

  document.getElementById('shift').style.backgroundColor = '#333333'
  document.getElementById('rightShift').style.backgroundColor = '#333333'

  // ESCONDE OS SINAIS E MOSTRA OS NUMEROS:

  document.getElementById('numeric').style.display = 'flex';
  document.getElementById('specialNumeric').style.display = 'none';

  document.getElementById('normalAccent').style.display = 'flex';
  document.getElementById('invertedAccent').style.display = 'none';

  document.getElementById('leftBracket').style.display = 'flex';
  document.getElementById('leftKey').style.display = 'none';

  document.getElementById('rightBracket').style.display = 'flex';
  document.getElementById('rightKey').style.display = 'none';

  
document.getElementById('comma').style.display = 'flex';
document.getElementById('leftArrow').style.display = 'none';

document.getElementById('point').style.display = 'flex';
document.getElementById('rightArrow').style.display = 'none';


var allNormalKeys = document.querySelectorAll('.normalKeyPosition');

if(capsLock == false){

allNormalKeys.forEach(function(allNormalKey) {
  allNormalKey.textContent = allNormalKey.textContent.toLowerCase();
})} else if(capsLock == true){

  allNormalKeys.forEach(function(allNormalKey) {
    allNormalKey.textContent = allNormalKey.textContent.toUpperCase();
  })

}
} 
capsLock = false

 function caps(){

  if(capsLock == false){
    capsOn()
    capsLock = true;
  } else {
    capsOff()
    capsLock = false;
  }

 }

 function capsOn(){

  shiftOff()
  shift = false
    document.getElementById('caps').style.backgroundColor = '#4e4e4e'

    // Seleciona todos os elementos com a classe 'normalKey'
  var allNormalKeys = document.querySelectorAll('.normalKeyPosition');
  
  allNormalKeys.forEach(function(allNormalKey) {
      
    allNormalKey.textContent = allNormalKey.textContent.toUpperCase();  

  })}

  function capsOff(){
  
    //shift = false
    //Faz a cor do botão voltar ao normal
    document.getElementById('caps').style.backgroundColor = '#333333'
  
  var allNormalKeys = document.querySelectorAll('.normalKeyPosition');
  
  allNormalKeys.forEach(function(allNormalKey) {
      
    allNormalKey.textContent = allNormalKey.textContent.toLowerCase();
  })
  }

function fnButton(){

fn ? fn = false : fn = true

if(fn){

document.getElementById('fn').style.backgroundColor = '#4e4e4e'
document.getElementById('fnA').style.display = 'none'
document.getElementById('fnLittleA').style.display = 'flex'

document.getElementById('fnO').style.display = 'none'
document.getElementById('fnLittleO').style.display = 'flex'

document.getElementById('interrogation').style.display = 'none'
document.getElementById('bigO').style.display = 'flex'

} else {

  document.getElementById('fn').style.backgroundColor = '#333333'

  document.getElementById('fnA').style.display = 'flex'
  document.getElementById('fnLittleA').style.display = 'none'
  
  document.getElementById('fnO').style.display = 'flex'
  document.getElementById('fnLittleO').style.display = 'none'

  document.getElementById('interrogation').style.display = 'flex'
document.getElementById('bigO').style.display = 'none'

}

}