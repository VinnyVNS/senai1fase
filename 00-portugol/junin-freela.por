programa {
  funcao inicio() {
    real hora, cliente = 350, denis = 500, valorTotal, lucro

    escreva("Digite a quantidade estimada de horas: ")
    leia(hora)

    valorTotal = (hora * cliente) + denis

    escreva("\nO valor cobrado deve ser: R$",valorTotal)

    lucro = valorTotal - denis

    escreva("\nO lucro total foi de: R$",lucro,"\n")
  }
}
