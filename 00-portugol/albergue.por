programa {
  funcao inicio() {
    inteiro diarias, calculoDias
    real precoDiaria, desconto10, desconto15, descontoTotal, multa, valorTotal

    escreva("Digite o numero de dias que quer ficar: ")
    leia(diarias)
    
    enquanto(diarias < 1){
      escreva("Digite um numero valido!")
      escreva("\nDigite o numero de dias que quer ficar: ")
      leia(diarias)
    }

    se(diarias >= 1 e diarias <6){
      precoDiaria = diarias * 100
    } senao se(diarias >= 6 e diarias < 11){
      precoDiaria = diarias * 90
    } senao {
      precoDiaria = diarias * 80
    }

    escreva("Valor bruto das diarias: R$", precoDiaria)
    
    multa = 150
    desconto10 = precoDiaria * 0.10
    desconto15 = precoDiaria * 0.15

    escreva("\nDesconto de 10%: R$", desconto10)
    escreva("\nDesconto de 15%: R$", desconto15)
    escreva("\nValor da multa: R$", multa)

    valorTotal = precoDiaria - desconto10 - desconto15
    valorTotal = valorTotal + multa

    escreva("\nValor total a ser pago: R$", valorTotal)
    
  }
}
