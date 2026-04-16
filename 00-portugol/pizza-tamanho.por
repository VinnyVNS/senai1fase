programa {
  funcao inicio() {
    inteiro pizza

    escreva("1 - Pizza Pequena\n2 - Pizza Media\n3 - Pizza Grande\nDigite o numero da pizza que deseja: ")
    leia(pizza)

    se(pizza == 1) {
      escreva("O preço será de R$30")
    } senao se(pizza == 2) {
      escreva("O preço será de R$50")
    } senao se(pizza == 3) {
      escreva("O preço será de R$80")
    } senao {
      escreva("Digite um numero valido!")
    }
  }
}
