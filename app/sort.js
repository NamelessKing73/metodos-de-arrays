let btnOrdenaPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenaPorPreco.addEventListener('click', ordenaLivrosPorPreço);

function ordenaLivrosPorPreço() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    // se 'a - b', então a organização será crescente.
    // se 'b - a', então a organização será decrescente.

    mostrarLivros(livrosOrdenados);
}
