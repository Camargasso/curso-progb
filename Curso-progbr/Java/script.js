// // alert("Hello word")
// console.log("Olá Mundo");
a="Placa de captura";
b="erro";
var b = a;
console.log(b);


// String é uma cadeia de caracteres (palavras ou frases) e estão sempre dentro de aspas
var b = "Primeira linha \n Segunda linha "
console.log(b);

console.log("1" + "1");
console.log( 1 + 1);

var b = null;
console.log(b);

// Boolean vai ser true / False

a = 10                    
b = 15
c = a * b
console.log(c)
// % módulo é a sobra do resultado da divisão 17/15=1 e sobra 2 logo 2 sera o módulo
// ++ incremento 
// -- decremento 
a = 20
b = --a    /*poderiamos usar incremento e decremento*/ 
console.log(b)


// a= a + 5 mesma coisa que a variável abaixo 
a = 30
a +=5
console.log(a)

a = 5
b = 5

console.log( a == b)

// O simbolo igual usado trez vezes compara o valor e tipo como exemplo number e text 
// != não é igual 
// < maior que 
// > menor que 

a = 7       
b = 5

console.log( a > b)

var idade = 35
var maior20 = idade > 20
var menor30 = idade < 30
var entre = maior20 && menor30
// Na var entre se um dos dois ou os dois forem falso então a variável será falsa
console.log( maior20 )
console.log( menor30 )
console.log(entre)

var idade = 20
var maior20 = idade >= 20
var menor30 = idade <= 30
var entre = maior20 && menor30
console.log(entre)


var idade = 8
var menor10 = idade <= 10
var maior65 = idade >= 65
var gratuidade = menor10 || maior65
console.log(gratuidade)

var idade = 35
var maior20 = idade >= 20
var menor20 = !maior20 /*Com a exclamação o código maior que 20 foi negado */ 
console.log(maior20)
console.log(menor20)



const larguraTela = window.innerWidth;
const alturaTela = window.innerHeight;
console.log(`Resolução da tela: ${larguraTela} x ${alturaTela}`);

alert(`Resolução da tela: ${larguraTela} x ${alturaTela}`)