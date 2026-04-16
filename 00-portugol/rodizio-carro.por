programa {
  funcao inicio() {
    inteiro placa

    escreva("Digite o ultimo numero de sua placa: ")
    leia(placa)

    se(placa == 0 ou placa == 1) {
      escreva("Não pode rodar na segunda-feira.")
    } senao se(placa == 2 ou placa == 3) {
      escreva("Não pode rodar na terça-feira.")
    } senao se(placa == 4 ou placa == 5) {
      escreva("Não pode rodar na quarta-feira.")
    } senao se(placa == 6 ou placa == 7) {
      escreva("Não pode rodar quinta-feira.")
    } senao se(placa == 8 ou placa == 9) {
      escreva("Não pode rodar na sexta-feira.")
    } senao {
      escreva("Digite um numero valido.")
    }
  }
}
