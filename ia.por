programa {
  funcao inicio() {
    inteiro tokens = 5, caracteres, tokensTotal, custoToken, custoTokensReal
    escreva("Digite o numero de caracteres do prompt: ")
    leia(caracteres)

    tokensTotal = tokens + caracteres

    escreva("\nDigite o custo de cada token em reais: ")
    leia(custoToken)

    custoTokensReal = tokensTotal * custoToken

    escreva("\nO prompt custará: ", tokensTotal, " tokens")
    escreva("\nO custo total será de: R$", custoTokensReal)
  }
}
