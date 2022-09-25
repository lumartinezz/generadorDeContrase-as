const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $mayuscula = $("#mayuscula");
const $minuscula = $("#minuscula");
const $numeros = $("#numeros");
const $simbolos = $("#simbolos");
const $soloLetras = $("#soloLetras")
const $soloNumeros = $("#soloNumeros")
const $todosCaracteres = $("#todosCaracteres")
const $copiarClave = $("#copiarClave")
const $btncopy = $("#btncopy")
const $longitudIngresada = $("#longitudIngresada");
const $btn = $("#btn");

const minus = "abcdefghijklmnopkrstuvwxyz";
const nums = "123456789";
const simb = "$^&!#%";
const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


const generadorPosibleContraseña = () => {

  const largoRequerido = parseInt($("#longitudIngresada").value);

  let contraseña = "";

  while (largoRequerido > contraseña.length) {

    if (largoRequerido > contraseña.length && $soloLetras.checked) {
      const num = Math.floor(Math.random() * minus.length);
      const num1 = Math.floor(Math.random() * mayus.length);
      contraseña += minus[num] + mayus[num1];
     
    }
    if (largoRequerido > contraseña.length && $soloNumeros.checked) {
      const num = Math.floor(Math.random() * nums.length);
      contraseña += nums[num];
    }
    if (largoRequerido > contraseña.length && $todosCaracteres.checked) {
      const num = Math.floor(Math.random() * minus.length);
      const num1 = Math.floor(Math.random() * mayus.length);
      const num2 = Math.floor(Math.random() * nums.length);
      const num3 = Math.floor(Math.random() * simb.length);
      contraseña += minus[num] + mayus[num1] + nums[num2] + simb[num3];
    }

    if (largoRequerido > contraseña.length && $mayuscula.checked) {
      const num = Math.floor(Math.random() * mayus.length);
      contraseña += mayus[num];
    }

    if (largoRequerido > contraseña.length && $minuscula.checked) {
      const num = Math.floor(Math.random() * minus.length);
      contraseña += minus[num];
    }

    if (largoRequerido > contraseña.length && $numeros.checked) {
      const num = Math.floor(Math.random() * nums.length);
      contraseña += nums[num];
    }

    if (largoRequerido > contraseña.length && $simbolos.checked) {
      const num = Math.floor(Math.random() * simb.length);
      contraseña += simb[num];
    }
  }

  $copiarClave.innerText = contraseña
};


$btncopy.addEventListener("click", () => {
    let textToCopy = $copiarClave.innerText
    navigator.clipboard.writeText(textToCopy)
})


const generadorContraseña = () => {
  $btn.addEventListener("click", generadorPosibleContraseña);

};
generadorContraseña();

$soloNumeros.addEventListener("click", () => {
  $mayuscula.disabled = true; 
  $mayuscula.checked = false;
  $minuscula.disabled = true; 
  $minuscula.checked = false;
  $simbolos.disabled = true; 
  $simbolos.checked = false;
  $numeros.checked = true;  
})

$soloLetras.addEventListener("click", () => {
  $mayuscula.checked = true; 
  $minuscula.checked = true; 
  $simbolos.disabled = true; 
  $simbolos.checked = false; 
  $numeros.disabled = true;
  $numeros.checked = false;
})

$todosCaracteres.addEventListener("click", () => {
  $mayuscula.checked = true; 
  $minuscula.checked = true; 
  $simbolos.checked = true; 
  $numeros.checked = true; 
})