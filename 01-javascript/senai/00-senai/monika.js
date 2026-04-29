let n, chance, prob

n = prompt("Digite quantas vezes olhou no celular:")
n = Number(n)

chance = (0.1 / (1 + 500 * n)) * 100
prob = 100 / chance

alert("Chance de ser aprovado é de "+chance.toFixed(5)+"%"+"\nProbabilidade de ser aprovado é de 1 em "+prob.toFixed(0))