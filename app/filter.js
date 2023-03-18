const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtraLivros));

function filtraLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisp() : filtrarPorCategoria(categoria);
    mostrarLivros(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calculaValorDosLivrosDisp(livrosFiltrados);
        mostraValorTotalDosLivros(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisp() {
    return livros.filter(livro => livro.quantidade > 0);
}

function mostraValorTotalDosLivros(valorTotal) {
    valorTotalLivrosDisp.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$<span id="valor">${valorTotal}</span></p>
    </div>`;
}
