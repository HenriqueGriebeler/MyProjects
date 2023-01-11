var year = window.document.getElementById('year')
var today = new Date()
var thisyear = today.getFullYear()
var res = document.querySelector('div#res')



function verificar(){

    if(year.value.length == 0 || year.value > thisyear){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = thisyear - Number(year.value)
        res.innerHTML = "Você vai fazer "+idade+" este ano!"
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gender = 'homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'images/baby_boy.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'images/teenager_boy.jpg')
            } else if(idade < 65){
                img.setAttribute('src', 'images/adult_man.jpg')
            } else{
                img.setAttribute('src', 'images/old_man.jpg')
            }


        } else if(fsex[1].checked){
            gender = 'mulher'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'images/baby_girl.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'images/teenager_girl.jpg')
            } else if(idade < 65){
                img.setAttribute('src', 'images/adult_woman.jpg')
            } else{
                img.setAttribute('src', 'images/old_woman.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML += " E é "+gender+"."
        res.appendChild(img)
    }
    

}