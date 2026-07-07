let nomes = []
// let contagemFila = 0

function addNome(){
    let nomeNovo = prompt("Digite seu nome:")

    nomes.push(nomeNovo)

    // document.getElementById("lista").innerHTML += `${nomeNovo}: ${contagemFila}<br>`
    // contagemFila++
}

function verificarPos(){
    let nomeUser = prompt("Digite seu nome:")

    for(let i = 0; i < nomes.length; i++){
        if(nomeUser == nomes[i]){
            document.getElementById("resultado").innerHTML = `Você está na posição: ${i}`
        }
    }
}