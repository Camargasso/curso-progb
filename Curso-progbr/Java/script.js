// // alert("Hello word")
// console.log("Olá Mundo");
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

var a = '3.5'  /*Para transformar text em number parsefloat para numeros quebrados e parseint para numeros sem decimais*/
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
while(numero < 10){
console.log('Número' + numero)
numero++
}
console.log('Acabou')


var numero = Math.random() * 100
console.log(numero)
while(numero < 90){
    var numero = Math.random() * 100
}
console.log(numero)
console.log('Acabou')