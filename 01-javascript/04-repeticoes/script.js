// let i = 1

// while(i <= 10){

//     let valor = i * i
//     document.getElementById("texto").innerHTML += `${valor} <br>`
//     i++
// }


// for(i = 10; i >= 1; i--){

//     document.getElementById("texto").innerHTML += `${i} <br>`
// }


// let i = 1

// let total = 0

// while(i <= 100){

//     total = total + i
//     i++
// }

// document.getElementById("texto").innerHTML = `${total}`


// for(i = 1; i <= 20; i++){

//     let valor = i % 2

//     if(valor == 1){
//         document.getElementById("texto").innerHTML += `${i} <br>`
//     }
// }


// let i = 1

// while(i <= 100){

//     let multi3 = i % 3
//     let multi5 = i % 5

//     if(multi3 == 0 && multi5 == 0){
//         document.getElementById("texto").innerHTML += `${i} FizzBuzz <br>`
//     }
//     else if(multi3 == 0){
//         document.getElementById("texto").innerHTML += `${i} Fizz <br>`
//     }
//     else if(multi5 == 0){
//         document.getElementById("texto").innerHTML += `${i} Buzz <br>`
//     }
//     else{
//         document.getElementById("texto").innerHTML += `${i} <br>`
//     }

//     i++
// }

// let numero = Number(prompt("Digite um numero"))

// let fator = 1

// for(i = 1; i <= numero; i++){

//     fator = fator * i
// }

// document.getElementById("texto").innerHTML += `${fator} <br>`

// for(i = 2; i <= 50; i++){
//     let primo = true

//     for(y = 2; y < i; y++){
//         let valor = i % y

//         if(valor === 0){
//             primo = false
//         }
//     }

//     if(primo === true){
//         document.getElementById("texto").innerHTML += `${i} <br>`
//     }
// }

// ==============================================================================================

// let soma = 0

// for(i = 1; i <= 10; i++){
//     soma = soma + i;
//     document.getElementById("texto").innerHTML += `${soma} <br>`
// }

// ============================================================================================

// for(i = 1; i <= 10; i++){
//     let valor = 5 * i
//     document.getElementById("texto").innerHTML += `5x${i} = ${valor} <br>`
// }

// =========================================================================================

// for(i = 1; i <= 10; i++){
//     let valor = i * i
//     document.getElementById("texto").innerHTML += `${i}: ${valor} <br>`
// }

// ==========================================================================================

// let palavra = "JavaScript"

// for(i = 0; i < palavra.length; i++){
//     document.getElementById("texto").innerHTML += `${palavra[i]} <br>`
// }

// ==========================================================================================

// let valor = 0

// for(i = 1; i <= 10; i++){
//     valor = valor + 3
//     document.getElementById("texto").innerHTML += `${valor} <br>`
// }

// =========================================================================================

// for(i = 1; i <= 10; i++){
//     document.getElementById("texto").innerHTML += `* `
// }

// ==============================================================================================

// let valor = 0

// for(i = 2; i <= 20; i+=2){
//     valor = valor + i
//     document.getElementById("texto").innerHTML += `${valor} <br>`
// }

// =========================================================================================

// for(i = 5; i <= 50; i+=5){
//     document.getElementById("texto").innerHTML += `${i} <br>`
// }

// ===========================================================================================

// let palavra = "Olá"

// for(i = 1; i <= 8; i++){
//     document.getElementById("texto").innerHTML += `${palavra} <br>`
// }

// ===================================================================================

// let valor = 0

// for(i = 1; i <= 15; i+=2){
//     valor = valor + i
//     document.getElementById("texto").innerHTML += `${valor} <br>`
// }

// ========================================================================================

// let num = Number(prompt("Digite um numero:"))
// let textoNum = ""

// for(i = 1; i <= num; i++){
//     textoNum = textoNum + `${i}`
//     document.getElementById("texto").innerHTML += `${textoNum} <br>`
// }

// ====================================================================================

// let fator = 1

// for(i = 1; i <= 5; i++){
//     fator = fator * i
//     document.getElementById("texto").innerHTML += `${fator} <br>`
// }

// ========================================================================================

// let palavra = prompt("Digite uma palavra")
// let soma = 0

// for(i = 0; i < palavra.length; i++){
//     if(palavra[i] == "o"){
//         soma = soma + 1
//     }
// }

// document.getElementById("texto").innerHTML = `A palavra possui: ${soma} letra(s) "o"`

// ============================================================================================

// let dias = Number(prompt("Digite a quantidade de dias da Sprint:"));
// let somaTarefas = 0
// let somaTarefasN = 0

// document.getElementById("texto").innerHTML += `Dias da Sprint: ${dias} <br> <br>`;

// for(i = 1; i <= dias; i++){
//     let tarefas = Number(prompt("Digite a quantidade de tarefas concluidas no dia "+ i));
//     let tarefasN = Number(prompt("Digite a quantidade de tarefas não concluidas no dia "+ i));
//     document.getElementById("texto").innerHTML += `Dia: ${i}<br>Concluidas: ${tarefas}<br>Não concluidas: ${tarefasN}<br><br>`;
//     somaTarefas = somaTarefas + tarefas;
//     somaTarefasN = somaTarefasN + tarefasN;
// }

// document.getElementById("texto").innerHTML += `Total de tarefas concluidas na Sprint: ${somaTarefas} <br>`;
// document.getElementById("texto").innerHTML += `Total de tarefas não concluidas na Sprint: ${somaTarefasN}`;

// ============================================================================================

function gerarRelatorio(){
    document.getElementById("texto").innerHTML = ``
    
    let dias = Number(prompt("Digite a quantidade de dias da Sprint:"))
    let totalBugs = 0
    let maiorBugs = 0
    let maiorDia = 0
    let menorBugs = 0
    let menorDia = 0
    let dias10 = 0
    let dias0 = 0

    for(i = 1; i <= dias; i++){
        let bugs = Number(prompt("Digite a quantidade de bugs encontrados no dia " + i))
        document.getElementById("texto").innerHTML += `Dia ${i}:<br>Bugs encontrados: ${bugs}<br><br>`
        totalBugs = totalBugs + bugs
        
        if(i === 1){
            maiorBugs = bugs
            maiorDia = i
            menorBugs = bugs
            menorDia = i
        }
        else if(bugs > maiorBugs){
            maiorBugs = bugs
            maiorDia = i
        }
        else if(bugs < menorBugs){
            menorBugs = bugs
            menorDia = i
        }

        if(bugs >= 10){
            dias10++
        }

        if(bugs === 0){
            dias0++
        }
    }

    let mediaBugs = totalBugs / dias

    document.getElementById("texto").innerHTML += `Total de bugs: ${totalBugs}<br>Média de bugs por dia: ${+mediaBugs.toFixed(2)}<br><br>`

    document.getElementById("texto").innerHTML += `Dia com mais bugs: Dia ${maiorDia}<br>Quantidade de bugs: ${maiorBugs}<br><br>`

    document.getElementById("texto").innerHTML += `Dia com menos bugs: Dia ${menorDia}<br>Quatidade de bugs: ${menorBugs}<br><br>`

    document.getElementById("texto").innerHTML += `Dia com menos bugs: Dia ${menorDia}<br>Quatidade de bugs: ${menorBugs}<br><br>`

    document.getElementById("texto").innerHTML += `Dias com mais de 10 bugs: ${dias10} dia(s)<br>`
    
    document.getElementById("texto").innerHTML += `Dias sem bugs: ${dias0} dia(s)<br>`
}