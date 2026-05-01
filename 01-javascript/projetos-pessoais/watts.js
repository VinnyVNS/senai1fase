function calculoWatts(){
    
    let circuito, volts, resistencias, listaOhms = [], corrente, req = 0, watts, kw, kwh, kwhConfirmar

    circuito = prompt("1 - Circuito Em Série\n2 - Circuito Paralelo\nDigite o numero corresponde ao circuito")
    if(circuito == null){
            return
        }
    circuito = Number(circuito)

    while(circuito < 1 || circuito > 2 || isNaN(circuito)){
        alert("Escolha um número válido!")
        circuito = prompt("1 - Circuito Em Série\n2 - Circuito Paralelo\nDigite o numero corresponde ao circuito")
        if(circuito == null){
            return
        }
        circuito = Number(circuito)
    }
    
    volts = prompt("Digite a voltagem da sua fonte: ")
    if(volts == null){
            return
        }
    volts = Number(volts)

    while(volts <= 0 || isNaN(volts)){
        alert("Digite um numero valido!")
        volts = prompt("Digite a voltagem da sua fonte: ")
        if(volts == null){
            return
        }
        volts = Number(volts)
    }

    resistencias = prompt("Digite o número de resistencias presentes no circuito: ")
    if(resistencias == null){
            return
        }
    resistencias = Number(resistencias)

    while(resistencias <= 0 || isNaN(resistencias)){
        alert("Escolha uma numero valido!")
        resistencias = prompt("Digite o número de resistencias presentes no circuito: ")
        if(resistencias == null){
            return
        }
        resistencias = Number(resistencias)
    }
    
    for (let i = 1; i <= resistencias; i++){
        let ohms = prompt("Digite o valor em Ohms da resistencia "+i)
        if(ohms == null){
            return
        }
        ohms = Number(ohms)
        while(ohms <= 0 || isNaN(ohms)){
            alert("Digite um valor valido!")
            ohms = prompt("Digite o valor em Ohms da resistencia "+i)
            if(ohms == null){
            return
        }
            ohms = Number(ohms)
        }
        listaOhms.push(ohms)
    }

    if(circuito == 1){
        for(let i = 0; i < listaOhms.length; i++){
            req = req + listaOhms[i]
        }
    }
    else{
        let ohmsParalelo = 0
        for(let i = 0; i < listaOhms.length; i++){
            ohmsParalelo = ohmsParalelo + (1 / listaOhms[i])
        }
        req = 1 / ohmsParalelo
    }
    
    corrente = volts / req
    watts = volts * corrente
    kw = watts / 1000

    kwhConfirmar = confirm("Deseja colocar o tempo gasto com o circuito ligado para descobrir os KwH?")

    if(kwhConfirmar == true){
        let horas = prompt("Digite a quantidade de tempo gasto em horas: ")
        if(horas == null){
            return
        }
        horas = Number(horas)

        while(horas < 0 || isNaN(horas)){
            alert("Digite um numero valido!")
            horas = prompt("Digite a quantidade de tempo gasto em horas: ")
            if(horas == null){
            return
        }
            horas = Number(horas)
        }
        kwh = kw * horas
        alert("Seu circuito será de "+watts.toFixed(2)+" Watts\n"+"Consumo será de "+kwh.toFixed(2)+" KwH.")
    }
    else{
        alert("Seu circuito será de "+watts.toFixed(2)+" Watts.")
    }
}