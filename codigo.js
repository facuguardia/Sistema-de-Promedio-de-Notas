//Codigo aplicando try and catch y Modal

const sendButton = document.getElementById("snd-nota");
sendButton.addEventListener("click", () => {
    let resultado, mensaje;
  try {
    prevRes = parseInt(document.getElementById("nota").value);
    if (isNaN(prevRes)) {
        throw "Error";
    }
    
    resultado = verificarAprbacion(8,4,mensaje);
    mensaje = definirMensaje(resultado);

  } catch(e){
    resultado = "¿Que paso?";
    mensaje = "Estas intentando hackear el sitio";
  }
  abrirModal(resultado, mensaje);
});

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {
        case 1: resultado = "Baja Nota"
        break;
        case 2: resultado = "Baja Nota"
        break;
        case 3: resultado = "Baja Nota"
        break;
        case 4: resultado = "Baja Nota"
        break;
        case 5: resultado = "Baja Nota"
        break;
        case 6: resultado = "Baja Nota"
        break;
        case 7: resultado = "Regular"
        break;
        case 8: resultado = "Bien"
        break;
        case 9: resultado = "Muy Bien"
        break;
        case 10: resultado = "Excelente"
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprbacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7) {
        return "<span class='green'>APROBADO</span>";
    }
    return "<span class='red'>DESAPROBADO</span>";
}

const abrirModal = (res,msg) =>{
   document.querySelector(".resultado").innerHTML = res;
   document.querySelector(".mensaje").innerHTML = "Tu prueba: "+ msg;
   let modal = document.querySelector(".modal-background");
   modal.style.display = "flex";
   modal.style.animation = "aparecer 1s forwards";
  
}