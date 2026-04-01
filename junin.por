programa {
  funcao inicio() {
    real salario, salarioDiario, salarioSemanal
    inteiro dias

    escreva("Digite seu salário: R$")
    leia(salario)

    escreva("\nDigite a quantidade de dias trabalhados no mês: ")
    leia(dias)

    salarioDiario = salario / dias

    salarioSemanal = salarioDiario * 5

    escreva("\nSeu salário diário é de: R$", salarioDiario)

    escreva("\nSeu salário semanal é de: R$",salarioSemanal,"\n")
  }
}
