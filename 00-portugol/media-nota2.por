programa {
  funcao inicio() {
    real notaA, notaB, media

    escreva("Digite a nota da primeira prova: ")
    leia(notaA)

    escreva("Digite a nota da segunda prova: ")
    leia(notaB)

    notaA = notaA * 3.5
    notaB = notaB * 7.5

    media = (notaA + notaB) / 11

    escreva("A média do aluno foi de: ",media)
  }
}
