var getClotes = localStorage.getItem("clotes");
console.log(getClotes)
if(getClotes !== null){
document.getElementById('roupasDisponiveis').innerHTML = ''+getClotes;}
else(
    document.getElementById('roupasDisponiveis').innerHTML = '<p>Ainda não temos roupas disponíveis...</p>'
)
