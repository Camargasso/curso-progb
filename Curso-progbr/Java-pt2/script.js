console.log(document) //Acessar o html através do js
document.body.innerHTML = "<h2> Título adicionado pelo js <h2>" + document.body.innerHTML //contatenado usando document


let p1 = document.getElementById("p1") //acessando elemento pelo id 
console.log(p1)


let paragrafos = document.getElementsByClassName("paragrafo") //acessando elemento pelo class 
console.log(paragrafos)
for (let p of paragrafos) { } //utilizando o for pegamos todos elementos de uma class
for (let p of paragrafos) { console.log(p) }



let tp = document.getElementsByTagName("p") //acessando tudo que for um parágrafo
console.log(tp)
console.log(tp[1])//como elemento e exibido em forma de um array essa seria uma maneira de acessar uma propriedade do elemento acessado


//Modificando elementos 
let p = document.getElementById("p1")
//modificando o conteudo pelo console da let criada
p.innerHTML = "Novo conteúdo" //aqui o conteúdo recebe um novo HTML
p.innerText = "Conteúdo mais novo" // aqui ele mostra oq esta sendo exibido na tela 
p.textContent = "Mais novo ainda" // aqui ele demonstra oq está no HTML

p.className = " " //modificado o class do elemento
p.style = "color: blue"//modificando o style 


//Eventos------------------------------------------------------------------------------
function h1click() {
    console.log("Executando a função") //função sendo ecxecutada com onclick no html 
}

function changeH3(input) { //função criada para modificar h3 do html pelo input
    let h3 = document.getElementsByTagName("h3")[0] //ByTagName nos da um array como queremos o primeiro elemento logo [0] 
    h3.innerText = input.value
}

function hideH3() {
    let h3 = document.getElementsByTagName("h3")[1]
    h3.style.display = "none"
}

//Quando utlizasse funções com o parenteses estamos executando a função quando utilizamos sem você esta retornando a função


//Comparando maneiras de criar um evento------------------------------------------------------------------------
function f() {
    console.log("teste")
    console.log(this)
}

function f1() {
    console.log("teste f1")
    console.log(this)
}

window.onload = function () {
    let h1 = document.getElementsByTagName("h1")[2]
    h1.addEventListener("click", f1)
}


//-- -----------------------------------------Elementos pai e filhos----------------------------------------------------

window.onload = function () {
    let d1 = document.getElementById("d1")
    console.log(d1)
    console.log(d1.children[0])
    //é uma propriedade de um elemento DOM que retorna uma coleção (ou lista) dos elementos filhos desse elemento podemos acessar 
    //informando a sua posição como num
}

window.onload = function px() {
    let h1 = document.getElementsByTagName("h1")

    for (let h of h1) {
        console.log(h)
        h.addEventListener("click", qop)
    }
    function qop(e) {
        let t = e.target
        console.log(t.parentElement)
    }
}


//Biblioteca match----------------------------------------------------------------------------------------------
let pi = Math.PI //Esse objeto Math. serve para realizar cálculos matemáticos 
console.log(pi)

let rz = Math.sqrt(16) //Como exemplo aqui calculamos a raiz quadrada de 16 
console.log(rz)

let pt = Math.sqrt(2, 3) //Calculo de potência 
console.log(pt)


//JSON serve para transformar uma string (que geralmente vai vim de um servidor) em um objeto-----------------

let a2 = '{"nome":"fabio","nota":7.8}'
let b2 = JSON.parse(a2)

console.log(a2)
console.log(b2)


//Local storage-----------------------------------------------------------------------------------------------
// localStorage.setItem("nome", "Gabriel") setItem para inserir conteúdo e salva-lo na memória web 
let yt = localStorage.getItem("nome") //getItem para buscar esse conteúdo
console.log(yt)
//local.storage.removeItem("nome") iria remover o conteúdo salvo na memória web 

onload = function () {
    let nome = localStorage.getItem("nome")
    let hx = document.getElementById("nome")
    hx.innerHTML = nome
}

function atualizar(element) {
    let valor = element.value
    console.log(valor)

    let hx = document.getElementById("nome")
    hx.innerHTML = valor
    localStorage.setItem("nome", valor)
}

