function calcularBrique(){
    let arte, preco

    arte = Number(prompt("Digite quanto você pagou na arte:"))

    preco = arte * 3

    document.getElementById("resultado").innerHTML = "O valor final será de R$"+preco.toFixed(2)
}