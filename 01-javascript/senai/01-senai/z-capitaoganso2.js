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