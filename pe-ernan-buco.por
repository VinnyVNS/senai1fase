programa {
  funcao inicio() {
    real custoMensal, doacoesDia, doacoesMes, compCustosMensais

    escreva("Digite o custo mensal da igreja: R$")
    leia(custoMensal)

    escreva("\nDigite o valor recebido de doaçoes no dia: R$")
    leia(doacoesDia)

    doacoesMes = doacoesDia * 30

    compCustosMensais = custoMensal - doacoesMes

    se(compCustosMensais < 0) {compCustosMensais = compCustosMensais * -1 escreva("\nA igreja terá lucro de R$",compCustosMensais,"\n")}
      senao se(compCustosMensais > 0) {escreva("\nA igreja precisará de R$",compCustosMensais," para completar os custos mensais.\n")}
        senao {escreva("\nA igreja não terá lucro e nem prejuizo.\n")}
  }
}
