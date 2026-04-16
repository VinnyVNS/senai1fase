programa {
  funcao inicio() {
    real tempC, tempF

    escreva("Digite a temperatura em Celsius: ")
    leia(tempC)

    tempF = tempC * 9/5 + 32

    escreva("Temperatura em Fahrenheit será: ", tempF, "°")

    se(tempF > 86) {
      escreva("\nAlerta de super calor!!")
    }
  }
}
