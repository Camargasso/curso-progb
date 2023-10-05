let image = document.getElementById("arara")

image.addEventListener("click", function(){
    image.setAttribute("src", "../Html e css/Imagens/ararazul.webp")
})

let lista = document.getElementById("lista")

let num = parseInt(lista.getAttribute("num")) //parseInt transforma a string em um numero

let conteudo = ""
for(let i = 0; i< num; i++){
conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo