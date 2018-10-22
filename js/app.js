Calculadora:{

var teclas = document.getElementsByClassName('tecla');

for (var i = 0; i < teclas.length; i++) {
  teclas[i].onmousedown= PrecionarTecla;
}
for (var i = 0; i < teclas.length; i++) {
  teclas[i].onmouseout= soltarTecla;
}
var contador=1;
var Resultados=0;
var numeroUno = 0.0;
var numeroDos = 0.0;
var operacion = "";
var primerResultado = true;

function soltarTecla(tecla){
tecla.target.style.transform="scale(1,1)";
}

function PrecionarTecla(tecla){
  var pantalla= document.getElementById('display').innerHTML;
  tecla.target.style.transform="scale(0.9,0.9)";;

switch (tecla.currentTarget.alt) {
  case '0':
  case '1':
  case '2':
  case '3':
  case '4':
  case '5':
  case '6':
  case '7':
  case '8':
  case '9':
    if (contador<=8) {
      añadirnumero(tecla.currentTarget.alt, pantalla);
      contador++;
      Resultados=0;
    }
    break;
    case 'mas':
    case 'menos':
    case 'por':
    case 'dividido':
    numeroUno = parseFloat(pantalla);

  operacion = tecla.currentTarget.alt;
  document.getElementById('display').innerHTML = "";
  primerResultado = true;
  contador = 1;
  break;
case 'On':
  limpiarPantalla();
  break;
case 'punto':
  añadirPunto(pantalla);
    break;
case 'signo':
  añadirNegativo(pantalla);
    break;
case 'igual':
  if(primerResultado)
  numeroDos = parseFloat(pantalla);

  ejecutarOperacion(operacion, numeroUno, numeroDos);
  primerResultado = false;
    break;
default:
}

}

function añadirnumero(numero,pantalla){
  if (pantalla=='0') {
    pantalla="";
    contador=1;
  }
  document.getElementById('display').innerHTML= pantalla+numero;
}
function añadirPunto(pantalla){
  if(!pantalla.includes('.')){
  document.getElementById('display').innerHTML= pantalla+".";
  }
}
function añadirNegativo(pantalla){
  if(parseFloat(pantalla)>0){
   document.getElementById('display').innerHTML = '-' + pantalla;
 }
}
function ejecutarOperacion(operacion,numeroUno,numeroDos){
  switch (operacion) {
    case 'mas':
    if (Resultados==0  && primerResultado) {
      Resultados=numeroUno+numeroDos;
    }else {
      Resultados=Resultados+numeroDos;
    }
    numeroDos=0.0;

      break;
      case 'menos':
      if (Resultados==0  && primerResultado) {
        Resultados=numeroUno-numeroDos;
      }else {
        Resultados=Resultados-numeroDos;
      }

        break;
        case 'por':
        if (Resultados==0  && primerResultado) {
          Resultados=numeroUno*numeroDos;
        }else {
          Resultados=Resultados*numeroDos;
        }

          break;
          case 'dividido':
          if (Resultados==0  && primerResultado) {
            Resultados=numeroUno/numeroDos;
          }else {
            Resultados=Resultados/numeroDos;
          }
          numeroDos=0.0;

            break;
    default:

  }
  document.getElementById('display').innerHTML = Resultados;
  document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.substring(0,7);
}
function limpiarPantalla(){
    document.getElementById('display').innerHTML = "0";
    numeroUno = 0.0;
    numeroDos = 0.0;
    Resultados = 0.0;
    contador = 1;
    primerResultado = true;
  }
}
