var getClotes = localStorage[clotes] || '<p>No momento, não possuimos roupas disponíveis para doação</p>';
console.log('carregado')
document.getElementById('roupasDisponiveis').innerHTML = getClotes;