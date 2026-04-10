programa {
  funcao inicio() {
    inteiro pontuacao

    escreva("Digite a sua pontuação: ")
    leia(pontuacao)

    se(pontuacao < 10){
      escreva("Deu ruim!")
    } senao se(pontuacao >= 10 e pontuacao < 100){
      escreva("Tá...melhorando.")
    } senao se(pontuacao >= 100 e pontuacao < 200){
      escreva("Supimpa!")
    } senao {
      escreva("MITOU!")
    }
  }
}
