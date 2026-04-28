let sabeNadar, idade, recomendacao

sabeNadar = Number(prompt("Sabe nadar?\n1 - sim 2 - não"))
idade = Number(prompt("Digite a idade:"))
recomendacao = Number(prompt("Possui recomendação?\n1 - sim 2 - não"))

if(sabeNadar == 1 && idade > 16){
    alert("Aprovado para o navio!")
}
else if(sabeNadar == 2 && idade > 14 && recomendacao == 1){
    alert("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
}
else{
    alert("Reprovado. Volte quando estiver mais preparado para o mar.")
}