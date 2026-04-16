programa {
  funcao inicio() {
    inteiro idade

    escreva("Digite sua idade: ")
    leia(idade)
    enquanto(idade < 0){
      escreva("Digite uma idade valida!")
      escreva("\nDigite sua idade: ")
      leia(idade)
    }
    se(idade < 16){
      escreva("Não pode votar.")
    } senao se(idade > 15 e idade < 18){
      escreva("Voto facultativo.")
    } senao se(idade > 17 e idade <66){
      escreva("Voto obrigatorio.")
    } senao {
      escreva("Voto facultativo.")
    }
  }
}
