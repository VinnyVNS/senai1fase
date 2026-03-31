programa {
  funcao inicio() {
    real frete, peso, distancia, volume
    peso = 20
    distancia = 650
    volume = 1
    frete = 15 + (peso * 2) + (distancia * 0.05) + (volume * 10)
    escreva("Caso 1: Valor do frete de R$",frete, "\n")
    peso = 60
    distancia = 1000
    volume = 0.5
    frete = 15 + (peso * 2) + (distancia * 0.05) + (volume * 10)
    escreva("Caso 2: Valor do frete de R$",frete, "\n")
    peso = 3
    distancia = 1200
    volume = 0.2
    frete = 15 + (peso * 2) + (distancia * 0.05) + (volume * 10)
    escreva("Caso 3: Valor do frete de R$",frete)
  }
}
