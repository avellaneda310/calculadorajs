var numero_1;
var numero_2;
var resultado;
var fin = document.getElementById("imprimir");


//sintaxis de una funcion
function inicio(){
    numero_1 = prompt("Ingrese un numero: ");// el prompt tomo lo ingresado como texto, hay que pasarlo a numero
    numero_2 = prompt("Ingrese otro numero: ");

//utilizo parsefloat para pasarlo a numero con decimales
    numero_1 = parseFloat(numero_1);
    numero_2 = parseFloat(numero_2);
}

function sumar(){
    // sintaxis del if/else

    if(!numero_1 || !numero_2){ 
        alert("Por favor, ingrese un numero");
        inicio()
    }else{
        resultado = numero_1 + numero_2;
        fin.innerHTML = (resultado)
    } 
    
    }

function restar(){
     if(!numero_1 || !numero_2){
        alert("Por favor, ingrese un numero");
        inicio()
     }else{
         resultado = numero_1 - numero_2;
         fin.innerHTML(resultado);

         //console.log("el resultado de la resta de" + numero_1 - "-" - numero_2 + "es: " + restar);
        }
      }   

function multiplicar(){
    if(!numero_1 || !numero_2){
        alert("Por favor, ingrese un numero");
        inicio()
     }else{
         resultado = numero_1 * numero_2;
         fin.innerHTML(resultado);
         //console.log("el resultado de la multiplicacion de" + numero_1 * "*" * numero_2 + "es: " + multiplicar);
        }
    }
function dividir(){
    if(!numero_1 || !numero_2){
        alert("Por favor, ingrese un numero");
        inicio()
     }else{
         resultado = numero_1 / numero_2;
         fin.innerHTML(resultado); 
         //console.log("el resultado de la division de" + numero_1 / "/" / numero_2 + "es: " + dividir);
        }
}    