//notas y/o formulas

//calculo de iva -----> importe iva = precio neto * 0.21
// precio neto + iporte iva = precio con iva incluido


// ====================================== Separador =============================================


//Variables

const iva = 0.21;
let precio = 0
let precioFinal = 0
let opcion

// Funciones
function sumarprecio(){
    precio += parseFloat(prompt("Ingrese el precio neto: ")) 
    console.log(precio)
    menu()
}
function salir(){
    alert("Fin del proceso")
}

function conIva(precioNeto){
    if(precioNeto > 0){
    let importeIva = precioNeto * iva;
    let conIva = precioNeto + importeIva;
    return conIva;    
    }
    else{
        alert("El precio no es valido")
    }
}



// menu del usuario
menu()
function menu(){
    console.log("1- Agregar precio sin iva de producto")
    console.log("2- Calcular precio con iva ")
    console.log("3- Salir")
    opcion = prompt("Ingrese una opcion: ")
    switch(opcion){
        case "1" :
           sumarprecio()     
            break;
            
        case "2":
            console.log("El precio con iva es: " + conIva(precio)) 
            break;
                    
        case "3" :            
            salir()
            break; 
        default:
            console.log("Operacion invalida")            
    }
    

}