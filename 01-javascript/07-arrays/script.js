const nomes = [
  "Arroz Integral", "Feijão Carioca", "Azeite de Oliva", "Café Torrado", "Açúcar Demerara",
  "Sal Marinho", "Macarrão Espaguete", "Molho de Tomate", "Leite Condensado", "Creme de Leite",
  "Biscoito Recheado", "Chocolate Amargo", "Salgadinho de Milho", "Refrigerante de Cola", "Suco de Uva",
  "Água Mineral", "Sabão em Pó", "Detergente Líquido", "Amaciante de Roupas", "Desinfetante Pinho",
  "Esponja de Aço", "Papel Higiênico", "Creme Dental", "Shampoo Anticaspa", "Condicionador Hidratante",
  "Sabonete Líquido", "Desodorante Roll-on", "Fio Dental", "Protetor Solar", "Creme Hidratante",
  "Fone de Ouvido Bluetooth", "Carregador Rápido", "Cabo USB-C", "Mouse Sem Fio", "Teclado Mecânico",
  "Power Bank", "Lâmpada LED", "Pilha Alcalina AA", "Garrafa Térmica", "Caneca de Cerâmica",
  "Caderno Universitário", "Caneta Esferográfica", "Lapiseira 0.7mm", "Post-it Colorido", "Pasta Suspensa",
  "Grampeador de Mesa", "Tesoura Escolar", "Fita Adesiva", "Organizador de Gaveta", "Mochila Impermeável"
];

function array00(){
    let idades = [18, 20, 12, 35, 14, 15];

    for(let i = 0; i < idades.length; i++){
        console.log(idades[i]);
    }

}

function addPrecos(){
    document.getElementById("resultado").innerHTML = ``;
    let precos = [];

    for(let i = 0; i < 10000; i++){
        let n = Math.ceil(Math.random() * 100);
    
        precos.push(n);
    
        document.getElementById("resultado").innerHTML += `${precos[i]} - `;
    }

}

function nomesProdutos(){
    document.getElementById("resultado").innerHTML = ``;

    for(let i = 0; i < nomes.length; i++){
        if(i < nomes.length - 1){
            document.getElementById("resultado").innerHTML += `${nomes[i]} - `;
        }

        if(i == nomes.length - 1){
            document.getElementById("resultado").innerHTML += `${nomes[i]}`;
        }
    }
}