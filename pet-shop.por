programa {
  funcao inicio() {
    real pesoGramas, valorQuilo, precoTotal

    escreva("Digite o valor do quilo: R$")
    leia(valorQuilo)

    escreva("Digite o peso da ração em gramas: ")
    leia(pesoGramas)

    precoTotal = (pesoGramas / 1000) * valorQuilo

    escreva("\nO valor total será de: R$",precoTotal,"\n")
  }
}
