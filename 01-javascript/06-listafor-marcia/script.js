// ==============================================================================================

let soma = 0

for(i = 1; i <= 10; i++){
    soma = soma + i;
    document.getElementById("texto").innerHTML += `${soma} <br>`
}

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