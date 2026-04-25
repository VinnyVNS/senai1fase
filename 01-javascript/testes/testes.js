// alert("Olá mundo!")


// let nome, idade

// nome = prompt("Digite seu nome: ")
// idade = prompt("Digite sua idade: ")

// alert("Nome: "+nome+"\nIdade: "+idade)


// let nota1, nota2, soma

// nota1 = prompt("Digite a nota 1: ")
// nota1 = Number(nota1)

// nota2 = prompt("Digete a nota 2: ")
// nota2 = Number(nota2)

// soma = nota1 + nota2

// alert("Sua nota é: "+soma)

function somar() {

let vitorias, empates, pontos

vitorias = document.getElementById("vitorias").value;
empates = document.getElementById("empates").value;

vitorias = Number(vitorias)
empates = Number(empates)

pontos = (vitorias * 3) + empates

document.getElementById("resultado").textContent = pontos
}