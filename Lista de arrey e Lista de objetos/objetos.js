// Lista de exercícios - Objetos
// 1. Catálogo de Produtos
// Crie um array com objetos representando produtos de uma loja. Implemente
// uma função que recebe um nome e retorna o produto correspondente.
// Array com objetos representando produtos de uma loja
const produtos = [
    { nome: "Camisa", preco: 49.99, categoria: "Roupas" },
    { nome: "Notebook", preco: 3299, categoria: "Eletrônicos" },
    { nome: "Caneca", preco: 19.90, categoria: "Utilidades" }
];
function buscarProdutoPorNome(nomeProduto) {
    return produtos.find(produto => produto.nome.toLowerCase() === nomeProduto.toLowerCase());
}
const resultado = buscarProdutoPorNome("Notebook");
console.log(resultado);

// 2. Sistema de Biblioteca
// Crie um objeto livro com título, autor e status de empréstimo. Implemente
// métodos emprestar() e devolver() que atualizam o status.
const biblioteca = {
    livros: [
        { titulo: "Bíblia", status: "disponivel" },
        { titulo: "Dom Quixote", status: "disponivel" },
        { titulo: "1984", status: "indisponivel" }
    ],

    emprestar(titulos) {
        this.livros.map(l => l.titulo === titulos && l.status === "disponivel" ? l.status = "indisponivel" : null);
    },
    
    devolver(titulos) {
        this.livros.map(l => l.titulo === titulos && l.status === "indisponivel" ? l.status = "disponivel" : null);
    },
    
    listar() {
        this.livros.forEach(l => console.log(`${l.titulo} - ${l.status}`));
    }
};
biblioteca.emprestar("Bíblia");
biblioteca.devolver("Dom Quixote");
biblioteca.listar();

