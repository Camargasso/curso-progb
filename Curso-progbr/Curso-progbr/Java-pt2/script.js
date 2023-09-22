console.log(document) //Acessar o html através do js
document.body.innerHTML = "<h2> Título adicionado pelo js <h2>" + document.body.innerHTML //contatenado usando document


let p1 = document.getElementById("p1") //acessando elemento pelo id 
console.log(p1)


let paragrafos = document.getElementsByClassName("paragrafo") //acessando elemento pelo class 
console.log(paragrafos)
for(let p of paragrafos){} //utilizando o for pegamos todos elementos de uma class
for(let p of paragrafos){console.log(p)}



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
