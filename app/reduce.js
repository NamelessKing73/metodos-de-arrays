function calculaValorDosLivrosDisp(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}

// o primeiro parâmentro (acc, valor atual), acumula os valores
// o segundo parâmetro é a operação realizada
// o terceiro é o index para medir a repetição de acumulação

/* 
Para somar: acc + valor atual
Para subtrair: acc - valor atual
Para verificar o maior valor: acc > valor atual ? acc : valor atual
Para verificar o menor valor: acc < valor atual ? acc : valor atual
*/