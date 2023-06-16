function displayName(){
    var myname = document.getElementById('myName')
    myname.innerText = ''
    var nameTyped = 'Henrique Griebeler'

    for(let i = 0; 0 < nameTyped.length; i++){
        myname.innerText += nameTyped[i]
    }
}

function showDescript(x){

    document.getElementById('tecnologyBelow').style.display = 'none'
    document.getElementById('langHTML').style.display = 'none'
    document.getElementById('langCSS').style.display = 'none'
    document.getElementById('langJAVASCRIPT').style.display = 'none'
    document.getElementById('langREACTJS').style.display = 'none'

    x.style.display = 'block'

} 

x = 0

function changeTheme(){
x==0 ? x=1 : x=0

 x==1 ? document.getElementById('imageFirst').src = 'images/hexagonWithColor.gif' : document.getElementById('imageFirst').src = 'images/hexagonBlack.gif'
    
}