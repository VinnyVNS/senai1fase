programa {
  funcao inicio() {
    real gastos = 8000, fatuIngressos = 7500, fatuItens = 5000, lucroReais, lucroPercentual
    lucroReais = (fatuIngressos + fatuItens) - gastos
    lucroPercentual = (lucroReais / gastos) * 100
    escreva("O lucro obtido em reais foi: R$",lucroReais,"\nO lucro percentual obtido foi de: ",lucroPercentual,"%")
  }
}
