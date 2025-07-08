const palavras = ['javascript', 'desenvolvimento', 'turma']
const palavrasNovo = palavras.filter(palavra=> palavra.length > 7 ).map(palavra=> palavra.toUpperCase()).sort()

console.log(palavrasNovo)

const alunos = [
    {
        nome: "Ana",
        notas: [8,9,10]
    },
    {
        nome:"Carlos",
        notas: [6,7,5]
    }
]

const alunosMedia = alunos.map(aluno=>{
    const nome = aluno.nome // Ana
    const media = aluno.notas.reduce((acumulador,valoratual)=> acumulador+valoratual,0) / aluno.notas.length
    return {
        nome:nome,
        media: media
    }
})

console.log(alunosMedia)


const transacoes = [
    {tipo: "entrada", valor: 100},
    {tipo: "saida", valor: 60},
    {tipo: "entrada", valor: 50},
    {tipo: "saida", valor: 30},
]

const transacoesFinal = transacoes.reduce((acumulador, valoratual)=>{
    if(valoratual.tipo === 'entrada'){
        acumulador += valoratual.valor
    } else {
        acumulador -= valoratual.valor
    }
    return acumulador
}, 0)

console.log(transacoesFinal)


const produtos = [
    {
        nome:"Cadeira",
        valor: 150
    },
    {
        nome:"Lapis",
        valor: 5
    }
]
const produtosFinal = produtos.map(produto=>{
    let valor 
    if(produto.valor > 100){
        valor = produto.valor * 0.9
    } else {
        valor = produto.valor
    }
    return {
        nome: produto.nome,
        valor: valor
    }
})

console.log(produtosFinal)

const produtos2 = [
    {
        nome:"Cadeira",
        valor: 150
    },
    {
        nome:"Lapis",
        valor: 5
    }
]

function buscarNome(nome, array){
    return array.find(produto => produto.nome === nome)
}

console.log(buscarNome("Lapis", produtos2))


const tarefas = [
    {
        descricao: "Prova",
        concluida: false
    },
    {
        descricao: "Exercicios",
        concluida: false
    },
    {
        descricao: "Atividade",
        concluida: true
    }
]

console.log(tarefas.map((tarefa)=> {
    if(tarefa.concluida === false){
        return "Pendende: " + tarefa.descricao
    } else return null
}).filter(tarefa => tarefa !== null))