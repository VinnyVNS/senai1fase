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