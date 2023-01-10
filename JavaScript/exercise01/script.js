function load(){
var msg = window.document.getElementById('msg')
var photo = window.document.getElementById('photo')

var data = new Date()
//var hora = data.getHours()
var hora = 22

msg.innerHTML = "Agora são " +hora+" horas"
if(hora >= 0 && hora < 12){

    photo.src = 'images/morning.jpg'
    document.body.style.backgroundColor = 'brown'

} else if(hora >= 12 && hora < 18){
    photo.src = 'images/afternoon.jpg'
} else {
    photo.src = 'images/night.jpg'
    document.body.style.backgroundColor = 'black'
}

}