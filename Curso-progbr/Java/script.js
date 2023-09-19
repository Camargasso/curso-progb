// // alert("Hello word")
// console.log("Olá Mundo");
// console.log() é o comando dado para você imprimir algo na tela
a = "Placa de captura";
b = "erro";
var b = a;
console.log(b);


// String é uma cadeia de caracteres (palavras ou frases) e estão sempre dentro de aspas
var b = "Primeira linha \n Segunda linha "
console.log(b);

console.log("1" + "1");
console.log(1 + 1);

var b = null;
console.log(b);

// Boolean vai ser true / False

a = 10
b = 15
c = a * b
console.log(c)
// % módulo é a sobra do resultado da divisão 17/15=1 e sobra 2 logo 2 sera o módul o
// ++ incremento 
// -- decremento 
a = 20
b = --a    /*poderiamos usar incremento e decremento*/
console.log(b)


// a= a + 5 mesma coisa que a variável abaixo 
a = 30
a += 5
console.log(a)

a = 5
b = 5

console.log(a == b)

// O simbolo igual usado trez vezes compara o valor e tipo como exemplo number e text 
// != não é igual 
// < maior que 
// > menor que 

a = 7
b = 5

console.log(a > b)

var idade = 35
var maior20 = idade > 20
var menor30 = idade < 30
var entre = maior20 && menor30
// Na var entre se um dos dois ou os dois forem falso então a variável será falsa
console.log(maior20)
console.log(menor30)
console.log(entre)

var idade = 20
var maior20 = idade >= 20
var menor30 = idade <= 30
var entre = maior20 && menor30
console.log(entre)

var idade = 8
var menor10 = idade <= 10
var maior65 = idade >= 65
var gratuidade = menor10 || maior65   /* || = ou */
console.log(gratuidade)

var idade = 35
var maior20 = idade >= 20
var menor20 = !maior20 /*Com a exclamação o código maior que 20 foi negado */
console.log(maior20)
console.log(menor20)

var str = 'Valor "texto entre aspas" qualquer' /*Pode ser usado aspas simples ou dupla*/
str += ' outro texto'
console.log(str)

var a = '3.5'  /*Para transformar text em nber parsefloat para numeros quebrados e parseint para numeros sem decimais*/
var b = '6'
var c = parseFloat(a) + parseInt(b)
console.log(c)


var nome = prompt('Insira seu nome:')
alert('Bom dia, ' + nome)

// const larguraTela = window.innerWidth;
// const alturaTela = window.innerHeight;
// console.log(`Resolução da tela: ${larguraTela} x ${alturaTela}`);

// alert(`Resolução da tela: ${larguraTela} x ${alturaTela}`)

var idade = 22

if (idade >= 35) {
    console.log('pode')
    console.log('Qual seu pedido')
}

else if (idade >= 18) {
    console.log('pode')
    console.log('Mostre a identidade')
}

else {
    console.log('não pode')
    console.log('Volte futuramente')
}

var idade = 22

if (idade >= 18 && idade <= 70) {
    console.log('pode')
    console.log('Qual seu pedido')
}

else {
    console.log('não pode')
    console.log('Volte futuramente')
}

var idade = 17
idade >= 18 ? console.log('Pode') : console.log('Não pode')


// -----------------------------------------Outro exercício------------------------------------


var nota1 = 5.0
var nota2 = 5.8

var media = (nota1 + nota2) / 2

var conceito = ''
if (media >= 8) {
    conceito = 'Ótimo'
}
else if (media >= 6.5) {
    conceito = 'Bom'
}
else {
    conceito = 'Regular'
}
console.log(media)
console.log(conceito)

switch (conceito) {
    case 'Ótimo':
        console.log('Parabéns')
        break;
    case 'Bom':
        console.log('Você esta quase perfeito')
        break;
    case 'Regular':
        console.log('Estude mais um pouco')
        break;
    default:
        console.log('Houve algum erro')
        break;
}


// for serve para repitir algo um certo número de vezes
var numero = 5
for (var i = 0; i < numero; i++) {
    console.log('Executando o for, pela  ' + i + 'Vez')
}
console.log('Acabou')


var numero = 5
while (numero < 10) {
    console.log('Número' + numero)
    numero++
}
console.log('Acabou')


var numero = Math.random() * 100
console.log(numero)
while (numero < 90) {
    var numero = Math.random() * 100
}
console.log(numero)
console.log('Acabou')

//Arrays
var alunos = new Array('Igor', 'José', 'Marcos', 'Mariana') /*e possível criar um array com [] no lugar 
de ()*/
console.log(alunos)

/*se quisermos imprimir apenas um aluno utilizamos o numero da posição dentro de colchetes no
console*/
var alunos = new Array('Igor', 'José', 'Marcos', 'Mariana')
console.log(alunos[0])

//O tamanho do array se chama length como no exemplo abaixo o length seria de 6 
var alunos = ['Igor', 'José', 'Marcos', 'Mariana', 'Joana', 'Leo']
for (var i = 0; i < alunos.length; i++) {
    /*var i = 0 marca o início de onde o for começa, i < alunos.length se i for menor que length então ele vai imprimir e i++ é oque 
    vai fazer a var ir aumentando*/
    console.log(alunos[i])
}

//Vai imprimir o index de cada elemento dentro do array 
var alunos = ['Igor', 'José', 'Marcos', 'Mariana', 'Joana', 'Leo']
for (var i in alunos) {
    console.log(i)
}

//Vai imprimir o valor de cada elemento dentro do array 
var alunos = ['Igor', 'José', 'Marcos', 'Mariana', 'Joana', 'Leo']
for (var aluno of alunos) {
    console.log(aluno)
}


//Funções 

function med(n1, n2) {
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2) / 2
    console.log(media)
}

med(6, 7)
med(8, 9)


function med2(n1, n2) {
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2) / 2
    // console.log(media)
    return media /*o return faz a function retornar a média na própria var resultado*/
}

var resultado1 = med2(6, 7)
var resutlado2 = med2(8, 9)
console.log(resultado1 + ' E ' + resutlado2)


//Função pt2--------------------------------------------------------------------------------------------------------
function saudacao() {
    return 'Olá mundo'
}

var s = saudacao()
console.log(s)

//exemplo 2----------------------------------------------------------
function med3(n1, n2) {
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2) / 2
    return media /*recebe n1 e n2 e retorna a var media*/
}

var resultado1 = med3(6, 7)
console.log(resultado1)

var m = med3 /*nesse caso transformamos a função em uma var*/
var resultado2 = m(2, 3)
console.log(resultado2)

//exemplo 3-----------------------------------------------------------
var med4 = (n4, n5) => {/*neste exemplo a função esta dentro de uma var e não é necessário o termo function pois estamos utilizando a =>*/
    return (n4 + n5) / 2
}
console.log(med4(8, 7))


//Objeto-------------------------------------------------------------------------------------------
// O objeto é aberto com {}, sempre vem acompanhado por uma chave seguido de um valor  
var aluno = { nome: 'João', nota1: '7.5' }
console.log(aluno.nota1)
//-----------------------------------------------------
var aluno = {
    nome: 'João',
    notas: [7.5, 5.0] /*nota se tornou um array*/
}

aluno.matricula = 383 /*pode receber uma propriedade mesmo após ser criado chamando a váriavel com um . inserindo a propriedade
a ser adicionado*/
aluno['sobrenome'] = 'Oliveira' /*outra maneira de inserir uma propriedade*/
// console.log(aluno.notas[1])  <--neste ex. selecionamos a nota a ser imprimida no array dentro do obj
console.log(aluno)

//Outra maneira de criar um objt
var aluno = new Object()
aluno.nome = 'Igor'
aluno.notas = [8, 9]
console.log(aluno)


//Objeto - Métodos--------------------------------------------------------------------------------------------
// Os métodos são funções dos objt
var aluno = {
    nome: 'Daniel',
    notas: [5, 8],

    media: function (n1, n2) {
        return (n1 + n2) / 2
    }
}

console.log(aluno)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

// Exemplo. 2 (solução para otimizar a função e aplicala aos dois alunos)-------------------------------------------------
function calcmedia(n1, n2) {
    return (n1 + n2) / 2
}

var aluno = {
    nome: 'Igor',
    notas: [6, 8],
    media: calcmedia
}

var aluno1 = {
    nome: 'João',
    notas: [10, 9],
    media: calcmedia
}

console.log(aluno)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

console.log(aluno1)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))

//Exemplo. 3 (solução para otimizar o console)-------------------------------------------------

/*Se a função for chamada como método de um objeto, this se refere a esse objeto*/
var aluno = {
    nome: 'Leandro',
    notas: [8, 8],
    media: function (n1, n2) {
        return (this.notas[0] + this.notas[1]) / 2 /* no exemplo this se refere a prop notas e notas é um array*/
    }
}
console.log(aluno)
console.log(aluno.media())


//Exemplo 4 (juntando o this e função isolada para aplica-la aos dois alunos ao mesmo tempo)--------------------
function calcmedia(n1, n2) {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno = {
    nome: 'Igor',
    notas: [6, 8],
    media: calcmedia
}

var aluno1 = {
    nome: 'João',
    notas: [10, 9],
    media: calcmedia
}

console.log(aluno)
console.log(aluno.media())

console.log(aluno1)
console.log(aluno1.media())


//Objeto - construtores------------------------------------------------------------------------------------------

function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [
    criarAluno('Igor', 9, 6),
    criarAluno('Joao', 7, 4),
    criarAluno('Marcela', 8, 7.5)
]

// var aluno = turma[0]
// console.log(aluno)
// console.log(aluno.media())

turma.forEach(function (elemento) {
    console.log(elemento)             /*o forEach faz uma varredura no array turma e consegue imprimir os elementos*/
    console.log(elemento.media())
})


//Exemplo 2.---------------------------------------------------------------------------------------------------------------

function alunox(nome, n1, n2) {
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function () {
        return (this.nota1 + this.nota2) / 2
    }
}

var a = new alunox('Igor', 8, 7)
console.log(a)
console.log(a.media())

    
//Objetos (resumo)--------------------------------------------------------------------------------------------------------
/* Pode se colocar um objeto dentro de uma variável abrindo as chaves{} 
 var b ={} */

/*Criar um objeto pela função 
function obj( receber x ){
return{ vai retornar 2+x}
}

var b = obj( 7 )
console.log(b) */

/*Criar um objeto com this

function obj(n, s){
    this.nome = n
    this.sobrenome = s 
}

var a = newobject(Gabriel, Camargo)
console.los(a)*/


//Data-------------------------------------------------------------------------------------------------------------------------
var d = new Date (/*ano, mês, dia, hora, minuto...*/ 2012, 11, 12, 22, 45)
            
console.log(d)
// quando passamos o mês em formato de número, o mesmo vai corresponder 
// ao index de um Array de [12] meses onde o 0 = janeiro e 11= dezembro 

var j = new Date (1000) /* quando se passa apenas um número indentifica-se como milisegundos*/
console.log(j)

var c = new Date (1000 * 60 * 5) /*é possível calcular uma data através de contas*/
console.log(c)  /*nesse ex inserimos 5 min*/

var s = new Date ('sep 05 2017 14:14') /*é possível criar uma data através de uma string mas a mesma deve estar em inglês*/
console.log(s)

var f = new Date ('05-15-2021') /*outra variação para criação de uma data*/
console.log(f.getDate()) /*Para selecionar apenas uma prop da data se executa essa função*/
console.log(f.getFullYear()) 

var g = new Date (1234578487) 
console.log(g) /*Para modificar uma prop da data se executa essa função*/
console.log(g.setDate(11))

//Cons, let e var--------------------------------------------------------------------------------------------------------------
const numero3 = [4] // a constante não pode ser modificada mas pode ser

numero3.push(7) //para adicionar elementos no array da const, tambem pode ser usado para objeto

console.log(numero3)

let numero5 = 4 

numero5 = 11

console.log(numero5)














