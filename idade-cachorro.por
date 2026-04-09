programa {
  funcao inicio() {
    inteiro idade, idadeHumanos = 7, idadeChachorroTotal

    escreva("Digite a idade do seu cachorro: ")
    leia(idade)

    idadeChachorroTotal = idade * idadeHumanos

    se(idadeChachorroTotal >= 65) {
      escreva("Seu cachorro já pode se aposentar!")
    } senao {
      escreva("Seu cachorro ainda precisa trabalhar e sustentar a familia!")
    }
  }
}
