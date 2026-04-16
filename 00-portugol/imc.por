programa {
  funcao inicio() {
    real peso, altura, imc

    escreva("Digite seu peso(kg): ")
    leia(peso)

    escreva("Digite sua altura(metros): ")
    leia(altura)

    imc = peso / altura * 2

    se(imc < 25) {
      escreva("Seu IMC está abaixo de 25!")
    } senao se(imc == 25) {
      escreva("Seu IMC está igual a 25!")
    } senao {
      escreva("Seu IMC está acima de 25!")
    }
  }
}
