programa {
  funcao inicio() {
    inteiro peso, distancia
    real volume, frete

    escreva("Digite o peso(kg): ")
    leia(peso)

    escreva("Digite a distancia(km): ")
    leia(distancia)

    escreva("Digite o volume(m3): ")
    leia(volume)

    frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)

    escreva("O valor do frete será: R$",frete)
  }
}
