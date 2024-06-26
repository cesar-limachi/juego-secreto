let numeroSecretoFunction = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

const asignarTextoElemento = (element, texto) => {
  let elementoHTML = document.querySelector(element);
  elementoHTML.innerHTML = texto;
};

function verificarUsario() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  /* console.log(numeroDeUsuario === numeroSecretoFunction); */
  if (numeroDeUsuario === numeroSecretoFunction) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecretoFunction) {
      asignarTextoElemento("p", "El numero es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

const limpiarCaja = () => {
  document.querySelector("#valorUsuario").value = "";
};

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

const condicionesIniciales = () => {
  asignarTextoElemento("h1", "Juego del número Secreto");
  asignarTextoElemento("p", `Ingrese un numero del 1 al ${numeroMaximo}`);
  numeroSecretoFunction = generarNumeroSecreto();
  intentos = 1;
};

const reiniciarJuego = () => {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
};

condicionesIniciales();
