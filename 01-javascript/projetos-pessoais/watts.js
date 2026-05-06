let volts, resistencias, listaOhms = [], corrente, req = 0, ohmsParalelo = 0, watts, kw, kwh, kwhConfirmar

let resultado = document.getElementById("resultado")
let resultado2 = document.getElementById("resultado2")
let resultado3 = document.getElementById("resultado3")

function calcularCircuitoSerie(){

    resultado.innerHTML = ``
    resultado2.innerHTML = ``
    resultado3.innerHTML = ``

    volts = prompt(`Digite a voltagem da sua fonte:`)
    if(volts == null){
            return
        }
    volts = Number(volts)

    while(volts <= 0 || isNaN(volts)){
        alert(`Digite um numero valido!`)
        volts = prompt(`Digite a voltagem da sua fonte:`)
        if(volts == null){
            return
        }
        volts = Number(volts)
    }

    resistencias = prompt(`Digite o número de resistencias presentes no circuito:`)
    if(resistencias == null){
            return
        }
    resistencias = Number(resistencias)

    while(resistencias <= 0 || isNaN(resistencias)){
        alert(`Escolha uma numero valido!`)
        resistencias = prompt(`Digite o número de resistencias presentes no circuito:`)
        if(resistencias == null){
            return
        }
        resistencias = Number(resistencias)
    }
    
    for (let i = 1; i <= resistencias; i++){
        let ohms = prompt(`Digite o valor em Ohms da resistencia ${i}`)
        if(ohms == null){
            return
        }
        ohms = Number(ohms)
        while(ohms <= 0 || isNaN(ohms)){
            alert(`Digite um valor valido!`)
            ohms = prompt(`Digite o valor em Ohms da resistencia ${i}`)
            if(ohms == null){
            return
        }
            ohms = Number(ohms)
        }
        listaOhms.push(ohms)
    }

    for(let i = 0; i < listaOhms.length; i++){
        req = req + listaOhms[i]
    }

    corrente = volts / req
    watts = volts * corrente
    kw = watts / 1000

    kwhConfirmar = confirm(`Deseja colocar o tempo gasto com o circuito ligado para descobrir os kWh?`)

    if(kwhConfirmar == true){
        let horas = prompt(`Digite a quantidade de tempo gasto em horas:`)
        if(horas == null){
            return
        }
        horas = Number(horas)

        while(horas < 0 || isNaN(horas)){
            alert(`Digite um numero valido!`)
            horas = prompt(`Digite a quantidade de tempo gasto em horas:`)
            if(horas == null){
            return
        }
            horas = Number(horas)
        }

        kwh = kw * horas

        resultado.innerHTML = `Seu circuito será de ${watts.toFixed(4)} Watts.<br>`
        resultado2.innerHTML = `O consumo por hora será de ${kw.toFixed(4)} kW.<br>`
        resultado3.innerHTML = `O consumo nas ${horas} horas será de ${kwh.toFixed(4)} kWh.`
        
    }
    else{
        resultado.innerHTML = `Seu circuito será de ${watts.toFixed(2)} Watts.`
        resultado2.innerHTML = `O consumo por hora será de ${kw.toFixed(2)} kW.`
    }
}

function calcularCircuitoParalelo(){

    resultado.innerHTML = ``
    resultado2.innerHTML = ``
    resultado3.innerHTML = ``

    volts = prompt(`Digite a voltagem da sua fonte:`)
    if(volts == null){
            return
        }
    volts = Number(volts)

    while(volts <= 0 || isNaN(volts)){
        alert(`Digite um numero valido!`)
        volts = prompt(`Digite a voltagem da sua fonte:`)
        if(volts == null){
            return
        }
        volts = Number(volts)
    }

    resistencias = prompt(`Digite o número de resistencias presentes no circuito:`)
    if(resistencias == null){
            return
        }
    resistencias = Number(resistencias)

    while(resistencias <= 0 || isNaN(resistencias)){
        alert(`Escolha uma numero valido!`)
        resistencias = prompt(`Digite o número de resistencias presentes no circuito:`)
        if(resistencias == null){
            return
        }
        resistencias = Number(resistencias)
    }
    
    for (let i = 1; i <= resistencias; i++){
        let ohms = prompt(`Digite o valor em Ohms da resistencia ${i}`)
        if(ohms == null){
            return
        }
        ohms = Number(ohms)
        while(ohms <= 0 || isNaN(ohms)){
            alert(`Digite um valor valido!`)
            ohms = prompt(`Digite o valor em Ohms da resistencia ${i}`)
            if(ohms == null){
            return
        }
            ohms = Number(ohms)
        }
        listaOhms.push(ohms)
    }

    for(let i = 0; i < listaOhms.length; i++){
        ohmsParalelo = ohmsParalelo + (1 / listaOhms[i])
    }
    req = 1 / ohmsParalelo

    corrente = volts / req
    watts = volts * corrente
    kw = watts / 1000

    kwhConfirmar = confirm(`Deseja colocar o tempo gasto com o circuito ligado para descobrir os kWh?`)

    if(kwhConfirmar == true){
        let horas = prompt(`Digite a quantidade de tempo gasto em horas:`)
        if(horas == null){
            return
        }
        horas = Number(horas)

        while(horas < 0 || isNaN(horas)){
            alert(`Digite um numero valido!`)
            horas = prompt(`Digite a quantidade de tempo gasto em horas:`)
            if(horas == null){
            return
        }
            horas = Number(horas)
        }

        kwh = kw * horas
        
        resultado.innerHTML = `Seu circuito será de ${watts.toFixed(4)} Watts.<br>`
        resultado2.innerHTML = `O consumo por hora será de ${kw.toFixed(4)} kW.<br>`
        resultado3.innerHTML = `O consumo nas ${horas} horas será de ${kwh.toFixed(4)} kWh.`
    }
    else{
        resultado.innerHTML = `Seu circuito será de ${watts.toFixed(2)} Watts.`
        resultado2.innerHTML = `O consumo por hora será de ${kw.toFixed(2)} kW.`
    }    
}