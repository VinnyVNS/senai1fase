programa {
  funcao inicio() {
    inteiro distancia
    real consumo, kml

    escreva("Digite a distancia percorrida em km: ")
    leia(distancia)

    escreva("Digite o consumo total de combustivel: ")
    leia(consumo)

    kml = distancia / consumo

    escreva("\nConsumo: ", kml, " km/l")
  }
}
