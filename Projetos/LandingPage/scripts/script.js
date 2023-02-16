var iname = document.getElementById('iname')
var number = document.getElementById('inumber')
var email = document.getElementById('iemal')

function send(){
    let msg = ''
    if(iname.value == ''){
      msg+='Não esqueça de adicionar o nome\n'       
    }if(number.value == ''){
      msg+='Não esqueça de adicionar o número\n'    
    }if(email.value ==''){
      msg+='Não esqueça de adicionar o e-mail\n'        
    }  if(msg == ''){
        console.log('Name '+iname.value)
        console.log('Number '+number.value)
        console.log('Email '+email.value)

        let changeColor = document.getElementById('forms')
        let sendButton = document.getElementById('sendButton')
        changeColor.style.backgroundColor = 'lightGreen'
        sendButton.value = 'ENVIADO!'

    }
}