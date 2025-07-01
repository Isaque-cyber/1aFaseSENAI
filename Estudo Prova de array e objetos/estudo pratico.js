// ======== EXERCÍCIOS COM .map() ========

// 1. Dobrar todos os números
const nums1 = [1, 2, 3];
const dobro = nums1.map(n => n * 2);
console.log("1:", dobro); // [2, 4, 6]

// 2. Transformar em strings
const nums2 = [1, 2, 3];
const comoString = nums2.map(n => n.toString());
console.log("2:", comoString); // ['1', '2', '3']

// 3. Somar índice ao valor
const somarIndice = nums2.map((n, i) => n + i);
console.log("3:", somarIndice); // [1+0, 2+1, 3+2] = [1, 3, 5]

// 4. Obter apenas nomes de pessoas
const pessoas1 = [
  { nome: "Ana", idade: 20 },
  { nome: "Lucas", idade: 25 }
];
const nomes = pessoas1.map(p => p.nome);
console.log("4:", nomes); // ['Ana', 'Lucas']

// 5. Criar array com idades ao quadrado
const idadesAoQuadrado = pessoas1.map(p => p.idade ** 2);
console.log("5:", idadesAoQuadrado); // [400, 625]

// 6. Marcar todos como "ativo"
const ativo = pessoas1.map(p => ({ ...p, status: "ativo" }));
console.log("6:", ativo);

// 7. Converter strings para uppercase
const palavras = ["sol", "lua"];
const upper = palavras.map(p => p.toUpperCase());
console.log("7:", upper); // ['SOL', 'LUA']

// 8. Converter array de strings para objetos com índice
const nomes2 = ["Ana", "Bia"];
const comIndice = nomes2.map((nome, i) => ({ id: i, nome }));
console.log("8:", comIndice);

// 9. Arredondar valores float
const valores = [1.2, 2.6];
const arredondados = valores.map(Math.round);
console.log("9:", arredondados); // [1, 3]

// 10. Extrair domínio de emails
const emails = ["a@gmail.com", "b@yahoo.com"];
const dominios = emails.map(e => e.split("@")[1]);
console.log("10:", dominios); // ['gmail.com', 'yahoo.com']

// ======== EXERCÍCIOS COM .filter() ========

// 11. Filtrar maiores de idade
const pessoas2 = [
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 20 }
];
const maiores = pessoas2.filter(p => p.idade >= 18);
console.log("11:", maiores);

// 12. Números pares
const nums3 = [1, 2, 3, 4];
const pares = nums3.filter(n => n % 2 === 0);
console.log("12:", pares); // [2, 4]

// 13. Strings com mais de 3 letras
const palavras2 = ["sol", "lua", "estrela"];
const longas = palavras2.filter(p => p.length > 3);
console.log("13:", longas); // ['estrela']

// 14. Filtrar objetos com status "ativo"
const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Bia", ativo: false }
];
const ativos = usuarios.filter(u => u.ativo);
console.log("14:", ativos);

// 15. Filtrar números maiores que 10
const numeros = [5, 15, 20];
const maiores10 = numeros.filter(n => n > 10);
console.log("15:", maiores10); // [15, 20]

// 16. Filtrar valores que são strings
const misto = [1, "a", true, "b"];
const apenasStrings = misto.filter(v => typeof v === "string");
console.log("16:", apenasStrings); // ['a', 'b']

// 17. Remover falsy (false, 0, '', null...)
const comFalsy = [0, 1, "", "ok", null, undefined];
const filtrado = comFalsy.filter(Boolean);
console.log("17:", filtrado); // [1, 'ok']

// 18. Pegar nomes com a letra A
const nomes3 = ["Ana", "Beto", "Alice"];
const comA = nomes3.filter(n => n.startsWith("A"));
console.log("18:", comA); // ['Ana', 'Alice']

// 19. Produtos disponíveis
const produtos = [
  { nome: "Caneta", estoque: 10 },
  { nome: "Lápis", estoque: 0 }
];
const disponiveis = produtos.filter(p => p.estoque > 0);
console.log("19:", disponiveis);

// 20. Idades válidas (entre 18 e 60)
const idades = [15, 22, 65, 30];
const validas = idades.filter(i => i >= 18 && i <= 60);
console.log("20:", validas); // [22, 30]

// ======== EXERCÍCIOS COM .reduce() ========

// 21. Somar todos os números
const nums4 = [1, 2, 3];
const soma = nums4.reduce((acc, val) => acc + val, 0);
console.log("21:", soma); // 6

// 22. Produto de todos os números
const produto = nums4.reduce((acc, val) => acc * val, 1);
console.log("22:", produto); // 6

// 23. Concatenar strings
const palavras3 = ["Olá", "mundo"];
const frase = palavras3.reduce((acc, val) => acc + " " + val);
console.log("23:", frase); // 'Olá mundo'

// 24. Encontrar maior número
const nums5 = [5, 8, 2];
const maior = nums5.reduce((a, b) => a > b ? a : b);
console.log("24:", maior); // 8

// 25. Contar quantos pares
const pares2 = [1, 2, 4, 5];
const qtdPares = pares2.reduce((acc, n) => n % 2 === 0 ? acc + 1 : acc, 0);
console.log("25:", qtdPares); // 2

// 26. Contar frequência de elementos
const letras = ["a", "b", "a", "c", "b"];
const freq = letras.reduce((acc, letra) => {
  acc[letra] = (acc[letra] || 0) + 1;
  return acc;
}, {});
console.log("26:", freq); // {a: 2, b: 2, c: 1}

// 27. Somar apenas os pares
const nums6 = [1, 2, 3, 4];
const somaPares = nums6.reduce((acc, n) => n % 2 === 0 ? acc + n : acc, 0);
console.log("27:", somaPares); // 6

// 28. Obter objeto com soma total de preços
const itens = [
  { nome: "A", preco: 10 },
  { nome: "B", preco: 15 }
];
const total = itens.reduce((acc, item) => acc + item.preco, 0);
console.log("28:", total); // 25

// 29. Unir arrays internos
const arrays = [[1, 2], [3, 4]];
const unido = arrays.reduce((acc, val) => acc.concat(val), []);
console.log("29:", unido); // [1,2,3,4]

// 30. Encontrar nome mais longo
const nomes4 = ["Ana", "Cristina", "Jo"];
const maisLongo = nomes4.reduce((a, b) => a.length > b.length ? a : b);
console.log("30:", maisLongo); // 'Cristina'

// ======== EXERCÍOS COMBINADOS (map + filter + reduce) ========

// 31. Dobrar apenas os pares
const nums7 = [1, 2, 3, 4];
const dobrarPares = nums7.filter(n => n % 2 === 0).map(n => n * 2);
console.log("31:", dobrarPares); // [4, 8]

// 32. Soma dos números ímpares ao quadrado
const somaImparesQuadrado = nums7
  .filter(n => n % 2 !== 0)
  .map(n => n ** 2)
  .reduce((acc, n) => acc + n, 0);
console.log("32:", somaImparesQuadrado); // 1^2 + 3^2 = 10

// 33. Quantidade de nomes com mais de 4 letras
const nomes5 = ["Ana", "Carlos", "Beatriz"];
const qtdGrandes = nomes5.filter(n => n.length > 4).length;
console.log("33:", qtdGrand
