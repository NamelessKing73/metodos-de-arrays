const sectionLivros = document.getElementById('livros');
const valorTotalLivrosDisp = document.getElementById('valor_total_livros_disponiveis');

function mostrarLivros(listaDeLivros) {
  sectionLivros.innerHTML = '';
  valorTotalLivrosDisp.innerHTML = '';
  listaDeLivros.forEach(livro => {
    let preco = livro.preco.toFixed(2);
    // let disponibilidade = verificaDisponibilidade(livro);
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'

    sectionLivros.innerHTML += `<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`;
  });
}

// function verificaDisponibilidade(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens';
//   } else {
//     return 'livro__imagens indisponivel';
//   }
// }
