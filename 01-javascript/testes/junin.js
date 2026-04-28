let visitantesNaArea, horaAtual

visitantesNaArea = Number(prompt("Digite quantos visitantes estão na área:"))
horaAtual = Number(prompt("Digite o horario atual (0 a 23):"))

if(visitantesNaArea == 0 && (horaAtual < 8 || horaAtual > 18)){
    alert("Liberação autorizada. Abrindo jaula.")
}
else{
    alert("Liberação negada. Área em uso ou fora do horário permitido.")
}