programa {
  funcao inicio() {
    real salario, moradia, agua, luz, internet, gasolina, streamings, telefone, outros, calculoFinal

    escreva("Digite o valor recebido de salário: R$")
    leia(salario)

    escreva("\nDigite o valor da moradia: R$")
    leia(moradia)

    escreva("\nDigite o valor da conta de água: R$")
    leia(agua)

    escreva("\nDigite o valor da conta de luz: R$")
    leia(luz)

    escreva("\nDigite o valor da conta de internet: R$")
    leia(internet)

    escreva("\nDigite o valor da conta de gasolina: R$")
    leia(gasolina)

    escreva("\nDigite o valor da conta de streamings: R$")
    leia(streamings)

    escreva("\nDigite o valor da conta de telefone: R$")
    leia(telefone)

    escreva("\nDigite o valor de outras contas a pagar: R$")
    leia(outros)

    calculoFinal = salario - (moradia + agua + luz + internet + gasolina + streamings + telefone + outros)

    escreva("\nDo seu salário sobrará: R$", calculoFinal, " após pagar suas contas.")
  }
}
