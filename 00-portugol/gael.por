programa {
  funcao inicio() {
    inteiro jares = 50, valorJares, quantiCaminhoes
    real valorCaminhao, jaresCaminhao, lucro

    escreva("Digite a quantidade de caminhões: ")
    leia(quantiCaminhoes)

    valorCaminhao = quantiCaminhoes * 450

    jaresCaminhao = jares * 90
    valorJares = jaresCaminhao * quantiCaminhoes

    lucro = valorJares - valorCaminhao

    escreva("\nO lucro foi de: R$",lucro,"\n")
  }
}
