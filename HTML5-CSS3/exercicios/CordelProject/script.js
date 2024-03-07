brazilIcon = document.getElementById('brazilIcon');
usaIcon = document.getElementById('usaIcon');

firstH1 = document.getElementById('firstH1');
firstP = document.getElementById('firstP');
p1 = document.getElementById('p1');
p2 = document.getElementById('p2');
p3 = document.getElementById('p3');
p4 = document.getElementById('p4');
p5 = document.getElementById('p5');
p6 = document.getElementById('p6');
p7 = document.getElementById('p7');
let language='pt-br'

  function changeLanguage(){
    if(language=='pt-br'){
    usaIcon.style.display = 'none'
    brazilIcon.style.display = 'block'
    changeToEN()
    language = 'en'
  } else{
    changeToPT()
    language = 'pt-br'
    
    usaIcon.style.display = 'block'
    brazilIcon.style.display = 'none'
    
  }
  }

function changeToEN(){
  firstH1.innerText = 'MODERN CORDEL';
  firstP.innerHTML = 'By <a href="https://www.recantodasletras.com.br/poesias/3186743" target="_blank">Milton Duarte</a>';

  p1.innerHTML = "I'm getting tired <br> Of this technology tale <br> Communication only through email <br> Short and cold messages prevail <br> Twitter and Facebook <br> Before I grow old and bend <br> I'll express it all in poetry'"

  p2.innerHTML = "It's not like it used to be <br> Everything is abbreviated <br> 'You' has only one letter <br> 'O' and 'U' erased somehow <br> To express love <br>  Just place a flower <br>  And a drawed heart."
}
function changeToPT(){

}

