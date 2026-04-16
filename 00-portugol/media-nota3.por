programa {
  funcao inicio() {
    real notaA, notaB, notaC, media

    escreva("Digite a primeira nota: ")
    leia(notaA)

    escreva("Digite a segunda nota: ")
    leia(notaB)

    escreva("Digite a terceira nota: ")
    leia(notaC)

    notaA = notaA * 2
    notaB = notaB * 3
    notaC = notaC * 5

    media = (notaA + notaB + notaC) / 10

    escreva("A nota média do aluno foi de: ",media)
  }
}
