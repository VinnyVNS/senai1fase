programa {
  funcao inicio() {
    inteiro numeroPalestra

    escreva("Palestras disponíveis: \n1 - Animações com Scratch\n2 - Scratch para Gamers\n3 - JavaScript para Leigos\n4 - tópicos Avançados de JavaScript\n5 - Vida e Carreira\n\nDigite o número da palestra que deseja ver: ")
    leia(numeroPalestra)

    se(numeroPalestra == 1){
      escreva("\nLocal: Laboratório 305, 19h.")
    } senao se(numeroPalestra == 2){
      escreva("\nLocal: Laboratório 512, 20h.")
    } senao se(numeroPalestra == 3){
      escreva("\nLocal: Laboratório 101, 19h.")
    } senao se(numeroPalestra == 4){
      escreva("\nLocal: Laboratório 305, 20h.")
    } senao se(numeroPalestra == 5){
      escreva("\nLocal: Auditório, 21h.")
    } senao {
      escreva("\nDigite um número valido.")
    }
  }
}
