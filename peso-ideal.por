programa {
  funcao inicio() {
    real altura, formula
    inteiro genero, pesoIdeal

    escreva("Digite sua altura: ")
    leia(altura)
    enquanto(altura <= 0){
      escreva("Digite uma altura valida!")
      escreva("\nDigite sua altura: ")
      leia(altura)
    }
    escreva("1 - Masculino\n2 - Feminino\nDigite o numero do seu genero: ")
    leia(genero)
    enquanto(genero < 1 ou genero > 2){
      escreva("Digite um numero valido!")
      escreva("\n1 - Masculino\n2 - Feminino\nDigite o numero do seu genero: ")
      leia(genero)
    }
    se(genero == 1){
      formula = (72.7 * altura) - 58
      escreva("Seu peso ideal é: ",formula," kg")
    } senao {
      formula = (62.1 * altura) - 44.7
      escreva("Seu peso ideal é: ",formula," kg")
    }
  }
}
