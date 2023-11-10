function speakGeneric() {
    console.log(this.sound)
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

dog.speak()
cat.speak()

let bindedFunction = speakGeneric.bind(dog)  //aqui damos um inserimos um contexto para o this manualmente
bindedFunction()


//-------------------------------------------------Arrow Functions----------------------------------------
// function dobro (x){
//     console.log(2 * x)
// }

// dobro(5)

let dobro = x => 2 * x
console.log(dobro(5))

//fazendo a mesma coisa utilzando a função arrow (arrow não trabalha bem com o this)


//----------------------------------------------Callback--------------------------------------------------
let usuarios = ["Adriano", "Marcia", "José"]

function inserirUsuario(nome, callback) {
    setTimeout(() =>{
        usuarios.push(nome)
        callback()                   //callback aplica o delay automaticamente para executar a função
    },1000)

}

function listarUsuarios(){
    console.log(usuarios)
}

inserirUsuario("Igor", listarUsuarios)
