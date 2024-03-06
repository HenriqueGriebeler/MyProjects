brazilIcon = document.getElementById('brazilIcon');
usaIcon = document.getElementById('usaIcon');

let language='pt-br'

function changeLanguage(){
  if(language=='pt-br'){
    alert('pegou')
  usaIcon.style.display = 'none'
  brazilIcon.style.display = 'block'
  language = 'en'
}
}