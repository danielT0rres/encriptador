// const mensajeOriginal = document.querySelector('textarea');

// function encriptar(){
//     let mensaje = (mensajeOriginal.value)
//     let resultado = (mensaje.replaceAll('e', 'enter'));
//     resultado = (mensaje.replaceAll('a', 'ai'))

//     console.log(resultado)

// }



const mensajeOriginal = document.querySelector('.textarea');
var mensaje = (mensajeOriginal.value)


function e(){
    mensaje = (mensaje.replaceAll('e', 'enter'));
    return(mensaje)
}

function a(){
    mensaje = (mensaje.replaceAll('a', 'ai'));
    console.log(mensaje)
}

// function o(){
//     resultado3 = (resultado2.replaceAll('o', 'ober'))
// }


function encriptar(event){
    e();
    a();
    console.log(mensaje)
    event.preventdefault()

}

// console.log(resultado)














// if (mensaje[i] == "e"){
//     mensaje[i] = "enter"
// }else if (mensaje[i] == "a"){
//     mensaje[i] = "ai"
// }else if (mensaje[i] == "o"){
//     mensaje[i] = "ober"
// }else if (mensaje[i] == "u"){
//     mensaje[i] = "ufat"
// }