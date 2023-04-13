let nombre ="Mediná"

function validarTexto(){
    //validaremos que no ingress numeros ni caracteres especiales
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
//esta function la voy a dividir para cada boton, para poder darle mejor mantenimiento
function inicio(){
    let encrip = encriptador(nombre)
    console.log(encrip)    
    descriptador(encrip)
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
        console.log(nuevo)
    }
}   

inicio()