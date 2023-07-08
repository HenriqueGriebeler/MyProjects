function displayName(){
    var myname = document.getElementById('myName')
    myname.innerText = ''
    var nameTyped = 'Henrique Griebeler'

    for(let i = 0; 0 < nameTyped.length; i++){
        myname.innerText += nameTyped[i]
    }
}

function showDescript(x,y){

    document.getElementById('tecnologyBelow').style.display = 'none'
    document.getElementById('langHTML').style.display = 'none'
    document.getElementById('langCSS').style.display = 'none'
    document.getElementById('langJAVASCRIPT').style.display = 'none'
    document.getElementById('langREACTJS').style.display = 'none'

    x.style.display = 'block'
    y.style.filter = 'none'
    
} function getColor(x){

    x.style.filter = 'none'

}

x = 0

function changeTheme(){
x==0 ? x=1 : x=0

 x==1 ? document.getElementById('imageFirst').src = 'images/hexagonWithColor.gif' : document.getElementById('imageFirst').src = 'images/hexagonBlack.gif'
    
} function runTechnologies(){

    document.getElementById('changeColor').style.display = 'block'
    document.getElementById('tecnologyBelow').style.display = 'block'
    document.getElementById('langHTML').style.display = 'none'
    document.getElementById('langCSS').style.display = 'none'
    document.getElementById('langJAVASCRIPT').style.display = 'none'
    document.getElementById('langREACTJS').style.display = 'none'

    document.getElementById('html5').style.display = 'block'
    document.getElementById('css3').style.display = 'block'
    document.getElementById('js').style.display = 'block'
    document.getElementById('reactjs').style.display = 'block'
    
} 

function openMenu(){

    document.getElementById('menu').style.color = 'white'
    document.getElementById('menu').style.transform = 'rotate(90deg)'
    const icones = document.getElementsByTagName('span');
    for(let i = 0; i < icones.length; i++){
        icones[i].style.display = 'block';
    }

}