///VARIABLES

///declaracion de una variable
let numerito;
let numerito2;

///solamente declare 2 variables
///en este momento almacenan NADA -> "unfdefined"

///ASIGANACION de datos

numerito = 3; ///le asigne a numerito un 3
numerito2 = 3.16;

///delacarion e inicializacion
let numerituwu = 1;

///Tipos de datos que puedo almacenar
let numeritu;
let texto;

///tipo number
numeritu = 3; ///int - enterio
numeritu = 2,7;///float - flotante

///Tipo string
texto = "MORIA CASSAN 2323"
texto = "@carlitos draktar@"


///CONSTANTE
///un espacio de memoria como el de una variable pero con la fiferencia esNO podemos alterar su contenido
///la voy a tener que declar e inicializar como un valor y siempre tendra el mismo

const PI = 3.14;
PI = 0; ///ESTO NO SE PUEDE, LAS CONSTANTES NO SE MODIFICAN-


///OPERACIONES CON LOS TIPOS DE DATOS

///SUMA RESTA MULTIPICACION DIVISION RESTO

let resultado;
let numero1;
let numero2;

numero1 = 3;
numero2 = 8;

//SUMA
resultado = numero1 + numero2 /// 11
//MULTIPLICACION
resultado = numero1 * numero2 /// 24
//DIVISION
resultado = numero1 / numero2 /// 0,375
///RESTO
resultado = numero1 % 2; /// 1
resultado = numero2 % 2; /// 0

///OPERADCIONES CON STRINGS

let frase1 = "hola";
let frase2 = "me llamo pedrito";
let resultadoOperacion;

///concatenacion
resultadoOperacion = frase1 + frase2 ///"hola me llamo pedrito"
resultadoOperacion = "mariano" + "Lopez" ///"mariano Lopez"

resultadoOperacion = "hola" + 1 /// "hola1"
resultadoOperacion = 8 + "hola" /// "8hola"

///TRABAJANDO CON LA MUESTRA E INGRESO DE DATOS DESDE EL NEVEGADOR

///MUESTRA DE DATOS

let mensajito = "hola como andas fachero"

//mostrar mensaje en la consola
///console.log(VALOR);

console.log(mensajito);
console.log ("joder q fachero soy")

///INGRESO DE DATOS
///PROMPT (MENSAJE);

let texto1;
let texto2;
let frasetotal;

texto1 = prompt('infrese un texto');
texto2 = prompt('infrese otro texto');
frasetotal = texto1 + texto2 // CONCATENACION DE LOS 2 ANTERIORES

////PROMP SIEMPRE Y SIEMPRE VA ADOLVER UN STRING
/// NO SE PUEDE HACER UNA OPERACION SOLO CON ESO, TENGO QUE HACER UN PRECESO DE CONVERSION

/*EJEMPLOS
numero 1 ; parseFloat(numero1)
numero 2 ; parseFloat(numero2)

numero 1 = Number(numero1)
numero 2 = Number(numero2)

numero1 = +numero1;  //convierte el string al tipo de dato
numero2 = +numero2;

*/
