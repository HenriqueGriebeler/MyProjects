var getClotes = localStorage.getItem("clotes");
console.log(getClotes)
document.getElementById('roupasDisponiveis').innerHTML = ''+getClotes;
