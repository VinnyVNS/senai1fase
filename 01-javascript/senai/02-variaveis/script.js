// let global = `Eu sou uma variável global :/`

// function funcao1(){
//     let local = `Sou uma variável local :D`
//     console.log(local)
//     console.log(global)
// }

// function funcao2(){
//     console.log(global)
//     // console.log(local)
// }

// // funcao1()
// // funcao2()


// let cont = 0

// function incrementarContagem(){
//     cont = cont + 1
//     document.getElementById("p-contagem").innerHTML = cont

// }

let valorT = 0
let valor = 0

function calcularVendas(){
    valor = Number(document.getElementById("valorV").value)
    valorT = valorT + valor

    document.getElementById("lista").innerHTML += `R$ ${valor} <br>`
    document.getElementById("valorV").value = ``
    document.getElementById("totalV").innerHTML = `Total de Vendas: R$ ${valorT}`
    document.getElementById("valorV").focus()
}

function voltarVenda(){
    
    valorT = valorT - valor
    document.getElementById("totalV").innerHTML = `Total de Vendas: R$ ${valorT}`
}

let totalP = 0
let d2C = 0
let d4C = 0
let d6C = 0
let d10C = 0
let d12C = 0
let d20C = 0

function rolarDadoD2(){
    let d2 = Math.ceil(Math.random() * 2)
    totalP = totalP + d2
    document.getElementById("totalP").innerHTML = `Total das rolagens: ${totalP}`
    document.getElementById("ultimoDado").innerHTML = `Ultimo dado: ${d2}`
    document.getElementById("rodadas").innerHTML += `Rodada: ${d2} <br>`
    d2C = d2C + 1
    document.getElementById("d2").innerHTML = `D2: ${d2C}`
}
function rolarDadoD4(){
    let d4 = Math.ceil(Math.random() * 4)
    totalP = totalP + d4
    document.getElementById("totalP").innerHTML = `Total das rolagens: ${totalP}`
    document.getElementById("ultimoDado").innerHTML = `Ultimo dado: ${d4}`
    document.getElementById("rodadas").innerHTML += `Rodada: ${d4} <br>`
    d4C = d4C + 1
    document.getElementById("d4").innerHTML = `D4: ${d4C}`
}
function rolarDadoD6(){
    let d6 = Math.ceil(Math.random() * 6)
    totalP = totalP + d6
    document.getElementById("totalP").innerHTML = `Total das rolagens: ${totalP}`
    document.getElementById("ultimoDado").innerHTML = `Ultimo dado: ${d6}`
    document.getElementById("rodadas").innerHTML += `Rodada: ${d6} <br>`
    d6C = d6C + 1
    document.getElementById("d6").innerHTML = `D6: ${d6C}`
}
function rolarDadoD10(){
    let d10 = Math.ceil(Math.random() * 10)
    totalP = totalP + d10
    document.getElementById("totalP").innerHTML = `Total das rolagens: ${totalP}`
    document.getElementById("ultimoDado").innerHTML = `Ultimo dado: ${d10}`
    document.getElementById("rodadas").innerHTML += `Rodada: ${d10} <br>`
    d10C = d10C + 1
    document.getElementById("d10").innerHTML = `D10: ${d10C}`
}
function rolarDadoD12(){
    let d12 = Math.ceil(Math.random() * 12)
    totalP = totalP + d12
    document.getElementById("totalP").innerHTML = `Total das rolagens: ${totalP}`
    document.getElementById("ultimoDado").innerHTML = `Ultimo dado: ${d12}`
    document.getElementById("rodadas").innerHTML += `Rodada: ${d12} <br>`
    d12C = d12C + 1
    document.getElementById("d12").innerHTML = `D12: ${d12C}`
}
function rolarDadoD20(){
    let d20 = Math.ceil(Math.random() * 20)
    totalP = totalP + d20
    document.getElementById("totalP").innerHTML = `Total das rolagens: ${totalP}`
    document.getElementById("ultimoDado").innerHTML = `Ultimo dado: ${d20}`
    document.getElementById("rodadas").innerHTML += `Rodada: ${d20} <br>`
    d20C = d20C + 1
    document.getElementById("d20").innerHTML = `D20: ${d20C}`
}
function resetarPontos(){
    totalP = 0
    d2C = 0
    d4C = 0
    d6C = 0
    d10C = 0
    d12C = 0
    d20C = 0
    document.getElementById("totalP").innerHTML = `Total das rolagens: ${totalP}`
    document.getElementById("ultimoDado").innerHTML = `Ultimo dado: 0`
    document.getElementById("rodadas").innerHTML = ``
    document.getElementById("d2").innerHTML = `D2: ${d2C}`
    document.getElementById("d4").innerHTML = `D4: ${d4C}`
    document.getElementById("d6").innerHTML = `D6: ${d6C}`
    document.getElementById("d10").innerHTML = `D10: ${d10C}`
    document.getElementById("d12").innerHTML = `D12: ${d12C}`
    document.getElementById("d20").innerHTML = `D20: ${d20C}`
}

let dinoEscolhido = 0
let dinoSorteado = 0
let valorTotal = 0
let valorCaixa = 0

function sortear(){
    if(dinoEscolhido == 0){
        alert("Por favor escolha um dino!")
    }
    else{
        let valorAposta = Number(document.getElementById("valorAposta-ipt").value)
        if(valorAposta == 0){
            alert("Por favor aposte um valor!")
        }
        else{
            let sorteio = Math.ceil(Math.random() * 10)
            dinoSorteado = sorteio

            if(dinoEscolhido == dinoSorteado){
                let valorGanho = valorAposta * 2
                let valorLimite = (valorGanho/valorTotal) * 100
                if(valorLimite < 20){
                    alert("Voce ganhou")
                    valorTotal = valorTotal - valorGanho
                    valorCaixa = valorCaixa + valorGanho
                    document.getElementById("valorFinal-otp").innerHTML = `Valor ganho: R$${valorGanho}`
                    document.getElementById("valorCaixa-otp").innerHTML = `Valor em caixa: R$${valorCaixa}`
                }
                else{
                    alert("ERRO!")
                }
            }
            else{
                alert("Voce perdeu")
                valorTotal = valorTotal + valorAposta
                document.getElementById("valorFinal-otp").innerHTML = `Valor ganho: R$0`
                document.getElementById("valorCaixa-otp").innerHTML = `Valor em caixa: R$${valorCaixa}`
            }
        }
    }

    if(dinoSorteado == 1){
        document.getElementById("dinoSorteado-otp").innerHTML = `Dino sorteado: Espinossauro`
    }
    else if(dinoSorteado == 2){
        document.getElementById("dinoSorteado-otp").innerHTML = `Dino sorteado: T-Rex`
    }
    else if(dinoSorteado == 3){
        document.getElementById("dinoSorteado-otp").innerHTML = `Dino sorteado: Braquiossauro`
    }
    else if(dinoSorteado == 4){
        document.getElementById("dinoSorteado-otp").innerHTML = `Dino sorteado: Velocirraptor`
    }
    else if(dinoSorteado == 5){
        document.getElementById("dinoSorteado-otp").innerHTML = `Dino sorteado: Estegossauro`
    }
    else if(dinoSorteado == 6){
        document.getElementById("dinoSorteado-otp").innerHTML = `Dino sorteado: Triceratopo`
    }
    else if(dinoSorteado == 7){
        document.getElementById("dinoSorteado-otp").innerHTML = `Dino sorteado: Anquilossauro`
    }
    else if(dinoSorteado == 8){
        document.getElementById("dinoSorteado-otp").innerHTML = `Dino sorteado: Parassaurolofo`
    }
    else if(dinoSorteado == 9){
        document.getElementById("dinoSorteado-otp").innerHTML = `Dino sorteado: Alossauro`
    }
    else if(dinoSorteado == 10){
        document.getElementById("dinoSorteado-otp").innerHTML = `Dino sorteado: Carnotauro`
    }
}

function escolherDino(numeroDino){
    dinoEscolhido = numeroDino
    if(dinoEscolhido == 11){
        dinoEscolhido = Math.ceil(Math.random() * 10)
    }
    let dinoEscolhidoNome = ``
    if(dinoEscolhido == 1){
        dinoEscolhidoNome = `Seu dino: Espinossauro`
    }
    else if(dinoEscolhido == 2){
        dinoEscolhidoNome = `Seu dino: T-rex`
    }
    else if(dinoEscolhido == 3){
        dinoEscolhidoNome = `Seu dino: Braquiossauro`
    }
    else if(dinoEscolhido == 4){
        dinoEscolhidoNome = `Seu dino: Velocirraptor`
    }
    else if(dinoEscolhido == 5){
        dinoEscolhidoNome = `Seu dino: Estegossauro`
    }
    else if(dinoEscolhido == 6){
        dinoEscolhidoNome = `Seu dino: Triceratopo`
    }
    else if(dinoEscolhido == 7){
        dinoEscolhidoNome = `Seu dino: Anquilossauro`
    }
    else if(dinoEscolhido == 8){
        dinoEscolhidoNome = `Seu dino: Parassaurolofo`
    }
    else if(dinoEscolhido == 9){
        dinoEscolhidoNome = `Seu dino: Alossauro`
    }
    else if(dinoEscolhido == 10){
        dinoEscolhidoNome = `Seu dino: Carnotauro`
    }
    document.getElementById("dinoEscolhido-otp").innerHTML = `${dinoEscolhidoNome}`
}

function mostrarValorTotal(){
    let senha = prompt("Digite a senha:")
    if(senha == "0171"){
        alert("Valor Total: R$"+ valorTotal)
    }
    else{
        alert("Senha invalida!")
    }
}