programa {
  funcao inicio() {
    inteiro vitorias, empates, pontos

    escreva("Digite o numero de vitorias: ")
    leia(vitorias)
    vitorias = vitorias * 3

    escreva("\nDigite o numero de empates: ")
    leia(empates)

    pontos = vitorias + empates

    escreva("\nSua pontuação total é de: ",pontos)
  }
}
