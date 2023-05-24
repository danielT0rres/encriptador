let mensajeOriginal = document.querySelector('.textarea');
const botonEncriptar = document.querySelector('.button1');
const botonDesencriptar = document.querySelector('.button2')
const respuesta = document.querySelector('.muñeco')
const copiar = document.querySelector('.texto2')
const botonCopiar = document.querySelector('.button3')

function encriptarE(){
    mensaje = (mensajeOriginal.value.replaceAll('e' , 'enter'));
    return(mensaje)

}

function encriptarA(){
    mensaje = mensaje.replaceAll('a' , 'ai');
    return(mensaje)

}

function encriptarO(){
    mensaje = mensaje.replaceAll('o' , 'ober');
    return(mensaje)
}

function encriptarU(){
    mensaje = mensaje.replaceAll('u' , 'ufat');
    return(mensaje)
}


botonEncriptar.addEventListener('click', () =>{
    encriptarE();
    encriptarA();
    encriptarO();
    encriptarU();

        respuesta.innerHTML = `<p class="mensaje-codificado">${mensaje}</p>`;
        document.querySelector('.respuesta').style.display = "none";
        document.querySelector('.texto2').style.display = "none";
        botonCopiar.style.display = "block"   
        
})

botonCopiar.addEventListener('click', () =>{
            
    copy = document.querySelector('.mensaje-codificado')
    navigator.clipboard.writeText(copy.textContent)

})


function desencriptarE(){
    mensaje = (mensajeOriginal.value.replaceAll('enter' , 'e'));
    return(mensaje)
    
}
    
function desencriptarA(){
    mensaje = mensaje.replaceAll('ai' , 'a');
    return(mensaje)

}
    
function desencriptarO(){
    mensaje = mensaje.replaceAll('ober' , 'o');
    return(mensaje)
}
    
function desencriptarU(){
    mensaje = mensaje.replaceAll('ufat' , 'u');
    return(mensaje)
}
    
botonDesencriptar.addEventListener('click', () =>{
        desencriptarE();
        desencriptarA();
        desencriptarO();
        desencriptarU();
    
            respuesta.innerHTML = `<p class="mensaje-codificado">${mensaje}</p>`;
            document.querySelector('.respuesta').style.display = "none";
            document.querySelector('.texto2').style.display = "none";
            botonCopiar.style.display = "block"   
    })    



