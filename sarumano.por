programa {
  funcao inicio() {
    inteiro quantiShows, bombas
    real valorBomba, valorTotalBombas

    escreva("Digite a quantidade de shows marcados: ")
    leia(quantiShows)

    bombas = quantiShows * 7

    escreva("\nDigite o valor de uma bomba: R$")
    leia(valorBomba)

    valorTotalBombas = bombas * quantiShows

    escreva("\nVocê precisará comprar ", bombas," bombas.")
    escreva("\nVocê precisará de R$", valorTotalBombas, " para comprar todas as bombas.", "\n")
  }
}
