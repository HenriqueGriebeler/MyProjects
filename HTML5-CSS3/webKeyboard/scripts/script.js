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
} else if(a == 'leftBracket'){
  keys.push(String.fromCharCode(91));
  text.value = keys.join('')
} else if(a == 'accent'){
  keys.push(String.fromCharCode(39));
  text.value = keys.join('')

} else{
if(shift == false && capsLock == false){
  keys.push(a.toLowerCase())
}else{
  keys.push(a.toUpperCase())
}
text.value = keys.join('')
if(capsLock == false && shift == true){
shiftOff()
}
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
  
  //Troca a cor do botão shift

 if(shift == false){ 
  capsLock = false
  capsOff()
  shift = true;
document.getElementById('shift').style.backgroundColor = '#4e4e4e'
document.getElementById('rightShift').style.backgroundColor = '#4e4e4e'

  // Seleciona todos os elementos com a classe 'normalKey'
var allNormalKeys = document.querySelectorAll('.normalKeyPosition');

allNormalKeys.forEach(function(allNormalKey) {
    
  allNormalKey.textContent = allNormalKey.textContent.toUpperCase();

})} else { 

 shiftOff() 
  
}
} function shiftOff(){

  shift = false
  capsLock = false
  capsOff()
  //Faz a cor do botão voltar ao normal
  document.getElementById('shift').style.backgroundColor = '#333333'
  document.getElementById('rightShift').style.backgroundColor = '#333333'

var allNormalKeys = document.querySelectorAll('.normalKeyPosition');

allNormalKeys.forEach(function(allNormalKey) {
    
  allNormalKey.textContent = allNormalKey.textContent.toLowerCase();
})
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