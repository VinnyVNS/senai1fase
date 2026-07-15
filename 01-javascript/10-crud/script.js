const dinos = []
const formulario = document.getElementById("formulario")

function enviar(){
    formulario.addEventListener("submit", (event) => {
        event.preventDefault()
    })

    const novoDino = {
    nome: document.getElementById("nomeInp").value,
    altura: Number(document.getElementById("alturaInp").value),
    cor: document.getElementById("corInp").value,
    custo: Number(document.getElementById("custoInp").value)
    }

    dinos.push(novoDino)

    document.getElementById("nomeInp").value = ``
    document.getElementById("alturaInp").value = ``
    document.getElementById("corInp").value = ``
    document.getElementById("custoInp").value = ``

    document.getElementById("nomeInp").focus()
}

function verDinos(){
    let resultado = ``
    let numeroDino = 1

    for(let i = 0; i < dinos.length; i++){
        resultado += `
            <div class="dinoLista">
                <p>Dino ${numeroDino}</p>
                <p>Nome: ${dinos[i].nome}</p>
                <p>Altura: ${dinos[i].altura}</p>
                <p>Cor: ${dinos[i].cor}</p>
                <p>Custo: ${dinos[i].custo}</p>
                <br>
            </div>
        `
        numeroDino++

        document.getElementById("resultado").innerHTML = resultado
    }

    
}