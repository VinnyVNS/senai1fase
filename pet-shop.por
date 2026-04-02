programa {
  funcao inicio() {
    real pesoGramas, valorQuilo = 10, precoTotal

    escreva("Digite o peso da ração em gramas: ")
    leia(pesoGramas)

    precoTotal = (pesoGramas / 1000) * valorQuilo

    escreva("\nO valor total será de: R$",precoTotal,"\n")
  }
}
