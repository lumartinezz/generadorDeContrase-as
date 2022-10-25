//Selectores

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

//Selectores de datos

const $mayuscula = $("#mayuscula");
const $minuscula = $("#minuscula");
const $numeros = $("#numeros");
const $simbolos = $("#simbolos");
const $soloLetras = $("#soloLetras")
const $soloNumeros = $("#soloNumeros")
const $todosCaracteres = $("#todosCaracteres")

//Selectores de botones

const $copiarClave = $("#copiarClave")
const $botoncopiar = $("#botoncopiar")
const $btn = $("#btn");
const $btnGenerar = $("#btnGenerar")

//Selectores de longitud

const $longitudIngresada = $("#longitudIngresada");
const $longitudRecibida = $("#longitudRecibida");
 
//Constantes de datos

const minus = "abcdefghijklmnopkrstuvwxyz";
const nums = "123456789";
const simb = "$^&!#%";
const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Funcion principal

// alert("Debes seleccionar una regla o un caracter") 

const generadorPosibleContraseña = () => {
 
  if(!$mayuscula.checked && !$minuscula.checked && 
    !$simbolos.checked &&  !$numeros.checked) {
    return alert("Debe seleccionar al menos una opcion")
  } 
    
  const contraseña = [];
 
  const largoRequerido = parseInt($("#longitudIngresada").value);


  while (largoRequerido > contraseña.length) {


    if (largoRequerido > contraseña.length && $soloLetras.checked && $minuscula.checked && $mayuscula.checked) {
      const num = Math.floor(Math.random() * minus.length);
      const num1 = Math.floor(Math.random() * mayus.length);
      contraseña.push(minus[num]);
      contraseña.push(mayus[num1]);
      } else if (largoRequerido > contraseña.length && $soloLetras.checked && $minuscula.checked){
        const num = Math.floor(Math.random() * minus.length);
        contraseña.push(minus[num]);
      } else if (largoRequerido > contraseña.length && $soloLetras.checked && $mayuscula.checked) {
        const num1 = Math.floor(Math.random() * mayus.length);
        contraseña.push(mayus[num1]);
      }

    

    if (largoRequerido > contraseña.length && $soloNumeros.checked) {
      const num = Math.floor(Math.random() * nums.length);
      contraseña.push(nums[num]);
    }

    if (largoRequerido > contraseña.length && $todosCaracteres.checked) {
      const num = Math.floor(Math.random() * minus.length);
      const num1 = Math.floor(Math.random() * mayus.length);
      const num2 = Math.floor(Math.random() * nums.length);
      const num3 = Math.floor(Math.random() * simb.length);
      contraseña.push(minus[num]);
      contraseña.push(mayus[num1]);
      contraseña.push(nums[num2]);
      contraseña.push(simb[num3]);
    }

    if (largoRequerido > contraseña.length && $mayuscula.checked) {
      const num = Math.floor(Math.random() * mayus.length);
      contraseña.push(mayus[num]);
    }

    if (largoRequerido > contraseña.length && $minuscula.checked) {
      const num = Math.floor(Math.random() * minus.length);
      contraseña.push(minus[num]);
    }

    if (largoRequerido > contraseña.length && $numeros.checked) {
      const num = Math.floor(Math.random() * nums.length);
      contraseña.push(nums[num]);
    }

    if (largoRequerido > contraseña.length && $simbolos.checked) {
      const num = Math.floor(Math.random() * simb.length);
      contraseña.push(simb[num]);
    }
  }

  $copiarClave.innerText = contraseña.join("");
};

//eventos para generar contraseña

$botoncopiar.addEventListener("click", () => {
    let textToCopy = $copiarClave.innerText
    navigator.clipboard.writeText(textToCopy)
})

$btnGenerar.addEventListener("click", generadorPosibleContraseña);

$btn.addEventListener("click", generadorPosibleContraseña);

function rango (value){
  $longitudRecibida.innerText = value;
}

//Eventos para checked y disabled, figuran en gris

$soloNumeros.addEventListener("click", () => {
  $mayuscula.checked = false;
  $minuscula.checked = false;
  $simbolos.checked = false;
  $numeros.checked = true;  
})

$soloLetras.addEventListener("click", () => {
  $mayuscula.checked = true; 
  $minuscula.checked = true; 
  $simbolos.checked = false; 
  $numeros.checked = false; 
})

const clickTodos = () => {
  $mayuscula.checked = true; 
  $minuscula.checked = true; 
  $simbolos.checked = true; 
  $numeros.checked = true;
}
$todosCaracteres.addEventListener("click", clickTodos)

clickTodos()