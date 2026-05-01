function verificarCracha(){

    document.getElementById("resultado").innerHTML = ``
    document.getElementById("resultado2").innerHTML = ``

    let cracha, digital

    cracha = Number(prompt("O crachá é válido?\n1 - Sim\n0 - Não"))
    digital = Number(prompt("A digital é válida?\n1 - Sim\n0 - Não"))

    if(cracha == 1 && digital == 1){
        document.getElementById("resultado").innerHTML = `Acesso liberado ao Centro de Comando`
    }
    else if(cracha == 0 && digital == 1){
        document.getElementById("resultado").innerHTML = `Crachá inválido. Dirija-se à recepção`
    }
    else if(cracha == 1 && digital == 0){
        document.getElementById("resultado").innerHTML = `Falha na digital. Tente novamente ou chame o suporte`
    }
    else{
        document.getElementById("resultado").innerHTML = `Acesso negado. Verifique sua identificação.`
    }
}