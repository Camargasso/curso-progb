let image = document.getElementById("arara")

image.addEventListener("click", function(){
    image.setAttribute("src", "../Html e css/Imagens/ararazul.webp")
})


//----------------------------------------------------------------------------------------
let lista = document.getElementById("lista")
lista.dataset.n = 4  //Para setar um valor fixo 

let id  = parseInt(lista.dataset.id)
console.log(id)

let num = parseInt(lista.dataset.n) //parseInt transforma a string em um numero
console.log(lista.dataset.num)

let conteudo = " "
for(let i = 0; i< num; i++){
conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo

//vídeo pt2.----------------------------------------------------------------------------------------
let video = document.getElementById("video1")
function play(){
    video.play()
}