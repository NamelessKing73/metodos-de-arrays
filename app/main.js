let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

procurarLivros();

async function procurarLivros() {
    const resposta = await fetch(endpointAPI);
    livros = await resposta.json();
    // let livrosComDesconto = aplicarDesconto(livros);
    mostrarLivros(livros);
}
