programa {
  funcao inicio() {
    real numero1, numero2

    escreva("Digite o primeiro numero: ")
    leia(numero1)

    escreva("Digite o segundo numero: ")
    leia(numero2)

    se(numero1 > numero2) {
      escreva("", numero1, " é maior que ", numero2)
    } senao se(numero2 > numero1){
      escreva("", numero2, " é maior que ", numero1)
    } senao {
      escreva("", numero1, " é igual ao ", numero2)
    }
  }
}
