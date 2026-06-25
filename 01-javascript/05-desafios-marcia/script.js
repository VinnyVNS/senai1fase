function gerarRelatorio(){
    document.getElementById("texto").innerHTML = ``
    let dias = Number(prompt("Digite a quantidade de dias da Sprint:"));
    let somaTarefas = 0
    let somaTarefasN = 0

    document.getElementById("texto").innerHTML += `Dias da Sprint: ${dias} <br> <br>`;

    for(i = 1; i <= dias; i++){
        let tarefas = Number(prompt("Digite a quantidade de tarefas concluidas no dia "+ i));
        let tarefasN = Number(prompt("Digite a quantidade de tarefas não concluidas no dia "+ i));
        document.getElementById("texto").innerHTML += `Dia: ${i}<br>Concluidas: ${tarefas}<br>Não concluidas: ${tarefasN}<br><br>`;
        somaTarefas = somaTarefas + tarefas;
        somaTarefasN = somaTarefasN + tarefasN;
    }

    document.getElementById("texto").innerHTML += `Total de tarefas concluidas na Sprint: ${somaTarefas} <br>`;
    document.getElementById("texto").innerHTML += `Total de tarefas não concluidas na Sprint: ${somaTarefasN}`;
}


function gerarRelatorio2(){
    document.getElementById("texto").innerHTML = ``
    
    let dias = Number(prompt("Digite a quantidade de dias da Sprint:"))
    let totalBugs = 0
    let maiorBugs = 0
    let maiorDia = 0
    let menorBugs = 0
    let menorDia = 0
    let dias10 = 0
    let dias0 = 0

    for(i = 1; i <= dias; i++){
        let bugs = Number(prompt("Digite a quantidade de bugs encontrados no dia " + i))
        document.getElementById("texto").innerHTML += `Dia ${i}:<br>Bugs encontrados: ${bugs}<br><br>`
        totalBugs = totalBugs + bugs
        
        if(i === 1){
            maiorBugs = bugs
            maiorDia = i
            menorBugs = bugs
            menorDia = i
        }
        else if(bugs > maiorBugs){
            maiorBugs = bugs
            maiorDia = i
        }
        else if(bugs < menorBugs){
            menorBugs = bugs
            menorDia = i
        }

        if(bugs >= 10){
            dias10++
        }

        if(bugs === 0){
            dias0++
        }
    }

    let mediaBugs = totalBugs / dias

    document.getElementById("texto").innerHTML += `Total de bugs: ${totalBugs}<br>Média de bugs por dia: ${+mediaBugs.toFixed(2)}<br><br>`

    document.getElementById("texto").innerHTML += `Dia com mais bugs: Dia ${maiorDia}<br>Quantidade de bugs: ${maiorBugs}<br><br>`

    document.getElementById("texto").innerHTML += `Dia com menos bugs: Dia ${menorDia}<br>Quatidade de bugs: ${menorBugs}<br><br>`

    document.getElementById("texto").innerHTML += `Dia com menos bugs: Dia ${menorDia}<br>Quatidade de bugs: ${menorBugs}<br><br>`

    document.getElementById("texto").innerHTML += `Dias com mais de 10 bugs: ${dias10} dia(s)<br>`
    
    document.getElementById("texto").innerHTML += `Dias sem bugs: ${dias0} dia(s)<br>`
}