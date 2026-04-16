programa {
  funcao inicio() {
    inteiro idade

    escreva("Digite sua idade: ")
    leia(idade)

    se(idade < 16) {
      escreva("Você não pode votar!", "\n")
    } senao {
      escreva("Você já pode votar!", "\n")
    }
  }
}
