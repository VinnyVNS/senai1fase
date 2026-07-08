const nomes = []

const form = document.getElementById("form")

function addNome(){
    form.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    const nomeNovo = document.getElementById("inputNome").value

    for(let i = 0; i < nomes.length; i++){
        if(nomes[i].toLowerCase() == nomeNovo.toLowerCase()){
            alert("O nome já foi registrado.")
            return
        }
    }

    if(/\d/.test(nomeNovo)){
        alert("Digite um nome sem números.")
        return
    }
    else{
        nomes.push(nomeNovo)
    }
    

    for(let i = 0; i < nomes.length; i++){
        if(nomes[i].toLowerCase() == nomeNovo.toLowerCase()){
            document.getElementById("seletor").innerHTML += `<option value="${i}">${nomes[i]} [${i}]</option>`
        }
        
    }

    document.getElementById("inputNome").value = ``
}

// function verificarPos(){
//     const nomeUser = document.getElementById("nome").value

//     for(let i = 0; i < nomes.length; i++){
//         if(nomeUser == nomes[i]){
//             document.getElementById("resultado").innerHTML = `Você está na posição: ${i}`
//         }
//     }
// }