let id = 1;

function addNewClote(){

const text = document.getElementById(id).value;
id+=1
document.getElementById('clotes').innerHTML+= "<br><input type='text' name='Roupas' id="+id+">"

}