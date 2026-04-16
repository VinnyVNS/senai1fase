programa {
  funcao inicio() {
    inteiro maca
    real precoMaca, valorTotal

    escreva("Digite quantas maças quer comprar: ")
    leia(maca)
    enquanto(maca <= 0){
      escreva("Digite um numero valido!")
      escreva("\nDigite quantas maças quer comprar: ")
      leia(maca)
    }

    se(maca < 12){
      precoMaca = 0.30
    } senao {
      precoMaca = 0.25
    }
    valorTotal = maca * precoMaca

    escreva("O valor total será de: R$",valorTotal)
  }
}
