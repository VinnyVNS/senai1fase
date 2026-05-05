let resultado = document.getElementById("resultado"), resultado2 = document.getElementById("resultado2")

function calcularViagem(){
    
    document.getElementById("resultado").innerHTML = ``
    document.getElementById("resultado2").innerHTML = ``

    let marujos, comida, comidaPorMarujo, comidaFaltante, dias, diasExtras, marujosFaltante
    marujos = prompt("Digite o numero de marujos:")
    if(marujos == null){
        return
    }
    marujos = Number(marujos)

    if(marujos >= 10){
        comida = prompt("Digite a quantidade de comida em kg:")
        if(comida == null){
            return
        }
        comida = Number(comida)

        comidaPorMarujo = comida / marujos

        if(comidaPorMarujo >= 1.5){
            document.getElementById("resultado").innerHTML = `Provisões suficientes. Rumo ao horizonte!`
            dias = comidaPorMarujo / 1.5
            diasExtras = dias - 1
            if(diasExtras >= 1){
                document.getElementById("resultado2").innerHTML = `<br>Você poderá ficar por mais ${diasExtras.toFixed(0)} dias no mar.`
            }
        }
        else{
            document.getElementById("resultado").innerHTML = `Algo está errado. Posseidom não quer ninguém no mar hoje.`
            comidaFaltante = 1.5 - comidaPorMarujo
            comidaFaltante = comidaFaltante * marujos
            document.getElementById("resultado2").innerHTML = `<br>Você precisa de mais ${comidaFaltante} kg de comida.`
        }
    }
    else{
        document.getElementById("resultado").innerHTML = `Algo está errado. Posseidom não quer ninguém no mar hoje.`
        marujosFaltante = 10 - marujos
        document.getElementById("resultado2").innerHTML = `<br>Você precisa de mais ${marujosFaltante} marujos.`
    }
}


function aprovacaoNavio(){

    document.getElementById("resultado").innerHTML = ``
    document.getElementById("resultado2").innerHTML = ``

    let sabeNadar, idade, recomendacao

    sabeNadar = Number(prompt("Sabe nadar?\n1 - sim\n0 - não"))
    idade = Number(prompt("Digite a idade:"))
    recomendacao = Number(prompt("Possui recomendação?\n1 - sim\n0 - não"))

    if(sabeNadar == 1 && idade > 16){
        document.getElementById("resultado").innerHTML = `Aprovado para o navio!`
    }
    else if(sabeNadar == 0 && idade > 14 && recomendacao == 1){
        document.getElementById("resultado").innerHTML = `Aprovado sob recomendação. Monitorar nas primeiras viagens.`
    }
    else{
        document.getElementById("resultado").innerHTML = `Reprovado. Volte quando estiver mais preparado para o mar.`
    }
}


function verificarCracha(){

    document.getElementById("resultado").innerHTML = ``
    document.getElementById("resultado2").innerHTML = ``

    let cracha, digital

    cracha = Number(prompt("O crachá é válido?\n1 - Sim\n0 - Não"))
    digital = Number(prompt("A digital é válida?\n1 - Sim\n0 - Não"))

    if(cracha == 1 && digital == 1){
        document.getElementById("resultado").innerHTML = `Acesso liberado ao Centro de Comando`
    }
    else if(cracha == 0 && digital == 1){
        document.getElementById("resultado").innerHTML = `Crachá inválido. Dirija-se à recepção`
    }
    else if(cracha == 1 && digital == 0){
        document.getElementById("resultado").innerHTML = `Falha na digital. Tente novamente ou chame o suporte`
    }
    else{
        document.getElementById("resultado").innerHTML = `Acesso negado. Verifique sua identificação.`
    }
}


function autorizacaoJunin(){
    
    document.getElementById("resultado").innerHTML = ``
    document.getElementById("resultado2").innerHTML = ``
    
    let visitantesNaArea, horaAtual

    visitantesNaArea = Number(prompt("Digite quantos visitantes estão na área:"))
    horaAtual = Number(prompt("Digite o horario atual (0 a 23):"))

    if(visitantesNaArea == 0 && (horaAtual < 8 || horaAtual > 18)){
        document.getElementById("resultado").innerHTML = `Liberação autorizada. Abrindo jaula.`
    }
    else{
        document.getElementById("resultado").innerHTML = `Liberação negada. Área em uso ou fora do horário permitido.`
    }
}


function calcularChance(){

    document.getElementById("resultado").innerHTML = ``
    document.getElementById("resultado2").innerHTML = ``
    
    let n, chance, prob

    n = prompt("Digite quantas vezes olhou no celular:")
    n = Number(n)

    chance = (0.1 / (1 + 500 * n)) * 100
    prob = 100 / chance

    document.getElementById("resultado").innerHTML = `Chance de ser aprovado é de ${chance.toFixed(5)}%<br>Probabilidade de ser aprovado é de 1 em ${prob.toFixed(0)}`
}


function gerarNumero(){

    document.getElementById("resultado").innerHTML = ``
    document.getElementById("resultado2").innerHTML = ``

    let numero, numAleatorio = Math.ceil(Math.random() * 10)

    numero = Number(prompt("Digite um numero de 1 a 10:"))

    if(numero == numAleatorio){
        document.getElementById("resultado").innerHTML = `Você acertou o numero!`
    }
    else{
        document.getElementById("resultado").innerHTML = `Você errou o numero! O numero era ${numAleatorio}`
    }
}


function calcularBrique(){
    
    document.getElementById("resultado").innerHTML = ``
    document.getElementById("resultado2").innerHTML = ``
    
    let arte, preco, lucro

    arte = Number(prompt("Digite quanto você pagou na arte:"))

    lucro = arte * 2
    preco = arte * 3

    document.getElementById("resultado").innerHTML = `O valor final da arte será de R$${preco}.`
    document.getElementById("resultado2").innerHTML = `<br>O lucro será de R$${lucro}.`
}


function verificarIdade(){

    resultado.innerHTML = ``
    resultado2.innerHTML = ``

    let idade

    idade = Number(prompt("Digite sua idade:"))

    if(idade >= 18){
        resultado.innerHTML = `Você é maior de idade!`
    }
    else{
        resultado.innerHTML = `Você é menor de idade!`
    }
}


function verificarNumeroPar(){

    resultado.innerHTML = ``
    resultado2.innerHTML = ``

    let numero, resto

    numero = Number(prompt("Digite um numero:"))

    resto = numero % 2

    if(resto == 0){
        resultado.innerHTML = `${numero} é par.`
    }
    else{
        resultado.innerHTML = `${numero} é impar.`
    }
}


function gerarCalculadoraSimples(){

    resultado.innerHTML = ``
    resultado2.innerHTML = ``

    let operador, numero, numero2, result

    operador = Number(prompt(`1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\nDigite o numero da operação que deseja realizar:`))
    numero = Number(prompt(`Digite o primeiro numero:`))
    numero2 = Number(prompt(`Digite o segundo numero:`))

    if(operador == 1){
        result = numero + numero2
        
        resultado.innerHTML = `${result}`
    }
    else if(operador == 2){
        result = numero - numero2

        resultado.innerHTML = `${result}`
    }
    else if(operador == 3){
        result = numero * numero2

        resultado.innerHTML = `${result}`
    }
    else{
        result = numero / numero2

        resultado.innerHTML = `${result}`
    }
}


function verificarSenha(){

    resultado.innerHTML = ``
    resultado2.innerHTML = ``

    let senha, caracteres

    senha = prompt(`Digite sua senha:`)

    caracteres = senha.length

    if(caracteres >= 8){
        resultado.innerHTML = `Senha aceita!`
    }
    else{
        resultado.innerHTML = `Senha negada! Sua senha deve ter pelo menos 8 caracteres.`
    }
}


function classificarNota(){

    resultado.innerHTML = ``
    resultado2.innerHTML - ``

    let nota

    nota = Number(prompt(`Digite sua nota de 0 a 100:`))

    if(nota > 80 && nota <= 100){
        resultado.innerHTML = `Nota A!`
    }
    else if(nota > 60 && nota <= 80){
        resultado.innerHTML = `Nota B!`
    }
    else if(nota > 40 && nota <= 60){
        resultado.innerHTML = `Nota C!`
    }
    else if(nota > 20 && nota <= 40){
        resultado.innerHTML = `Nota D!`
    }
    else{
        resultado.innerHTML = `Nota E!`
    }
}


function verificarAnoBissexto(){

    resultado.innerHTML = ``
    resultado2.innerHTML = ``

    let ano, bissexto

    ano = Number(prompt(`Digite o ano:`))

    if(ano == 1000 || ano == 2000 || ano == 3000){
        bissexto = ano % 400
    }
    else{
        bissexto = ano % 4
    }

    if(bissexto == 0){
        resultado.innerHTML = `${ano} é bissexto.`
    }
    else{
        resultado.innerHTML = `${ano} não é bissexto.`
    }
}