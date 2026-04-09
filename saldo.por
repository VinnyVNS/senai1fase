programa {
  funcao inicio() {
    real preco, saldo

    escreva("Digite o preço do item: R$")
    leia(preco)

    escreva("Digite o seu saldo: R$")
    leia(saldo)

    se(saldo >= preco) {
      escreva("Você poderá comprar o item!")
    } senao {
      escreva("Você não poderá comprar o item!")
    }
  }
}
