//variables
const textArea = document.getElementById("boxtext")
const btnEncriptar = document.getElementById("encriptar")
const btnDesencriptar = document.getElementById("descencriptar")
const btnCopiarTexto = document.getElementById("copiar")
let contenido

//css
const copiarTexto= document.getElementById("copiar")
const textCopiar = document.getElementById("textcopiar")
const formulario = document.querySelector("form")
const imagen = document.getElementById("imagenMuneco")
const mensaje = document.getElementById("mensaje")

textArea.focus()
//evento para que el formulario no recargue la página
formulario.addEventListener("submit", e =>{
    e.preventDefault()
})

//evento boton encriptar
btnEncriptar.addEventListener("click", () =>{
    
    contenido = textArea.value
    //validacion de solo texto
    let validador = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/
    if(!validador.test(contenido)){
        alert("Ingreso solo texto")
        textArea.focus()
        return false
    }
    textArea.value=""
    copiarTexto.classList.add("mostrar")
    copiarTexto.classList.remove("ocultar")
    imagen.classList.add("ocultar")
    mensaje.classList.add("ocultar")

    textCopiar.classList.add("mostrar")
    textCopiar.classList.remove("ocultar")
    //la funcion encriptador
    textCopiar.value=encriptador(contenido)

})

//boton copiar el texto
btnCopiarTexto.addEventListener("click",CopyText)

//boton descrencriptar texto
btnDesencriptar.addEventListener("click", ()=>{
    
    contenido = textArea.value
    textArea.value = ""
    textCopiar.value = descriptador(contenido)

})

//funciones de logica
//funcion de copiado
function CopyText(){
    textCopiar.select()
   let textoCopiado = document.execCommand("copy")

   return textoCopiado
}

//convertidor a minusculas y valida sin tildes
function convertir(texto){

    texto = texto.toLowerCase()
                 .replace(/[áäâà]/,"a")
                 .replace(/[éëèè]/,"e")
                 .replace(/[íïî1ì]/,"i")
                 .replace(/[óöôò]]/,"o")
                 .replace(/[úüûù]/,"u")
    
    return texto

}

//funcion de encriptación del texto
function encriptador(texto){

    let word = convertir(texto)
    
    let separador = word.split("")
    
    for(let i=0;i<separador.length;i++){
        if(separador[i]=="a"){
            separador[i]="ai"
        }
        if(separador[i]=="e"){
            separador[i]="enter"
        }
        if(separador[i]=="i"){
            separador[i]="imes"
        }
        if(separador[i]=="o"){
            separador[i]="ober"
        }
        if(separador[i]=="u"){
            separador[i]="ufat"
        }

        //console.log(separador[i])
    }
    let unir = separador.join("")
    //console.log(unir)

    return unir
}

//función para descriptar el mensaje
function descriptador(texto){
    
    let word = convertir(texto)
    let a = word.includes("ai")
    let e = word.includes("enter")
    let i = word.includes("imes")
    let o = word.includes("ober")
    let u = word.includes("ufat")

    if(a || e || i || o || u){
        let nuevo = word.replaceAll("enter","e")
                        .replaceAll("ai","a")
                        .replaceAll("imes","i")
                        .replaceAll("ober","o")
                        .replaceAll("ufat","u")
        
        return nuevo
    }
}   
