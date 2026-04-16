programa {
  funcao inicio() {
    inteiro id, horas
    real valorHoraTrabalhada, salario

    escreva("Digite o numero(ID) do funcionario: ")
    leia(id)

    escreva("Digite a quantidade de horas trabalhadas pelo funcionario: ")
    leia(horas)

    escreva("Digite o valor por hora trabalhada: R$")
    leia(valorHoraTrabalhada)

    salario = horas * valorHoraTrabalhada

    escreva("\nNumero = ",id)
    escreva("\nSalario = R$",salario, "\n")
  }
}
