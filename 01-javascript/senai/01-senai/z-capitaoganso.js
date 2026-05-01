function calcularViagem(){
    
    document.getElementById("resultado").innerHTML = ``
    document.getElementById("resultado2").innerHTML = ``

    let marujos, comida, comidaPorMarujo, comidaFaltante, dias, diasExtras, marujosFaltante
    marujos = prompt("Digite o numero de marujos:")
    if(marujos == null){
        return
    }
    marujos = Number(marujos)

    if(marujos >= 10){
        comida = prompt("Digite a quantidade de comida em kg:")
        if(comida == null){
            return
        }
        comida = Number(comida)

        comidaPorMarujo = comida / marujos

        if(comidaPorMarujo >= 1.5){
            document.getElementById("resultado").innerHTML = `Provisões suficientes. Rumo ao horizonte!`
            dias = comidaPorMarujo / 1.5
            diasExtras = dias - 1
            if(diasExtras >= 1){
                document.getElementById("resultado2").innerHTML = `<br>Você poderá ficar por mais ${diasExtras.toFixed(0)} dias no mar.`
            }
        }
        else{
            document.getElementById("resultado").innerHTML = `Algo está errado. Posseidom não quer ninguém no mar hoje.`
            comidaFaltante = 1.5 - comidaPorMarujo
            comidaFaltante = comidaFaltante * marujos
            document.getElementById("resultado2").innerHTML = `<br>Você precisa de mais ${comidaFaltante} kg de comida.`
        }
    }
    else{
        document.getElementById("resultado").innerHTML = `Algo está errado. Posseidom não quer ninguém no mar hoje.`
        marujosFaltante = 10 - marujos
        document.getElementById("resultado2").innerHTML = `<br>Você precisa de mais ${marujosFaltante} marujos.`
    }
}