programa {
  funcao inicio() {
    cadeia nome
    real salario, vendas, bonus, total

    escreva("Digite o nome do vendedor: ")
    leia(nome)

    escreva("Digite o salario fixo do vendedor: R$")
    leia(salario)

    escreva("Digite o total de vendas em reais: R$")
    leia(vendas)

    bonus = (vendas * 15) / 100

    total = salario + bonus

    escreva("\nNome do vendedor: ",nome)
    escreva("\nSalario do vendedor: R$",salario)
    escreva("\nBonus de vendas: R$",bonus)
    escreva("\nTotal: R$",total)
  }
}
