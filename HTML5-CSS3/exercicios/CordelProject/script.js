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
p8 = document.getElementById('p8');
let language='pt-br'

  function changeLanguage(){
    if(language=='pt-br'){
    usaIcon.style.display = 'none'
    brazilIcon.style.display = 'inline'
    changeToEN()
    language = 'en'
  } else{
    changeToPT()
    language = 'pt-br'
    
    usaIcon.style.display = 'inline'
    brazilIcon.style.display = 'none'
    
  }
  }

function changeToEN(){
  firstH1.innerText = 'MODERN CORDEL';
  firstP.innerHTML = 'By <a href="https://www.recantodasletras.com.br/poesias/3186743" target="_blank">Milton Duarte</a>';

  p1.innerHTML = "I'm getting tired <br> Of this technology tale <br> Communication only through email <br> Short and cold messages prevail <br> Twitter and Facebook <br> Before I grow old and bend <br> I'll express it all in poetry'"

  p2.innerHTML = "It's not like it used to be <br> Everything is abbreviated <br> 'You' has only one letter <br> 'O' and 'U' erased somehow <br> To express love <br>  Just place a flower <br>  And a drawed heart."

  p3.innerHTML = "arroba now doesn't weigh <br> It's part of an address <br> Period is not even used <br> Or goes at the beginning <br> Now it's .com <br> If the site is really good <br> It's worth a high price."

  p4.innerHTML = "To worsen the language <br> The emoticon is a risk <br> There's a symbol for everything <br> Semicolon and an asterisk <br> A kiss signifies <br> To understand how it turns out <br> Decipher this scribble."

  p5.innerHTML = "I miss the letters <br> Written with own hand <br> Sent in the month of June <br> Only arrived in the summer <br> But it killed the longing <br> Was genuine text <br> In the lines of the heart."

  p6.innerHTML = "Now, I write and send <br> Arriving at the same moment <br> But when I want to chat <br> The person has left <br> Opened another app <br> The world became captive <br> To now's technology."

  p7.innerHTML = "Fortunately, to pray <br> Doesn't need internet <br> God listens to everyone <br> If you want, take this test <br> Two points are two knees <br> Your lips are devices <br> Let God interpret."

  p8.innerHTML = 'Website designed by <a href="https://github.com/HenriqueGriebeler" target="_blank">Henrique Griebeler</a> to <a href="https://github.com/HenriqueGriebeler/html-css/tree/main/exercicios" target="_blank">my repository</a>'

}
function changeToPT(){

  firstH1.innerText = 'CORDEL MODERNO';
  firstP.innerHTML = 'Por <a href="https://www.recantodasletras.com.br/poesias/3186743" target="_blank">Milton Duarte</a>';

  p1.innerHTML = "Estou ficando cansado <br> Da tal tecnologia <br>  Só se fala por e-mail <br> Mensagem curta e fria <br> Twitter e Facebook <br> Antes que eu caduque <br> Vou dizer tudo em poesia."

  p2.innerHTML = "Não é mais como era antes <br> É tudo abreviado <br> 'Você' só tem duas letras <br>O 'O' e o 'E' foi riscado <br> Para declarar o amor <br> Basta botar uma flor <br> E um coração desenhado."

  p3.innerHTML = "Arroba agora não pesa <br> É parte de um endereço <br> Ponto final nem se usa <br> Ou vai até no começo <br> Agora é .com <br> Se o saite é muito bom <br> Ele vale um alto preço."

  p4.innerHTML = "Pra piorar a liguagem <br> O emoticom é um risco <br> Tem símbolo para tudo <br> Ponto e vírgula e um asterisco <br> Um beijo significa <br> Pra entender como fica <br> Decifre esse rabisco."

  p5.innerHTML = "Tenho saudade das cartas <br> Escritas com a própria mão <br> Mandava no mês de Junho <br> Só chegava no Verão <br> Mas matava a saudade <br> Era texto de verdade <br> Nas linhas do coração."

  p6.innerHTML = "Agora, escrevo e envio <br> Chegando na mesma hora <br> Mas quando vou prosear <br> A pessoa foi embora <br> Abriu outro aplicativo <br> O mundo ficou cativo <br> Da tecnologia do agora."

  p7.innerHTML = "Felizmente, pra orar <br> Não precisa de internet <br> Deus escuta todo mundo <br> Se quiser, faça esse teste <br> Dois pontos são dois joelhos <br> Seus lábios são aparelhos <br> Deixe que Deus interprete."

  p8.innerHTML = 'Site criado por <a href="https://github.com/HenriqueGriebeler" target="_blank">Henrique Griebeler</a> para <a href="https://github.com/HenriqueGriebeler/html-css/tree/main/exercicios" target="_blank">meu repositório</a>'

}

