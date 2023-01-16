/* ************************************************* */
/* FUNCIÓN PARA VALIDAR QUE SE INGRESEN SOLO LETRAS  */
/* ************************************************* */
function validarTexto(e) {
  var tecla = e.keyCode || e.which; //Obtenemos el código de la tecla presionada
  var keyboard = String.fromCharCode(tecla).toLowerCase(); //convertimos la tecla presionada a minúscula y la guardamos en tecla
  var letters = "abcdefghijklmnñopqrstuvwxyz"; //guardamos las teclas que vamos a permitir
  var special = [8, 32, 37, 38, 46, 264]; //guardamos los códigos de las teclas especiales permitidas
  var special_key = false;

  //For para buscar si la tecla presionada esta dentro del array de teclas especiales
  for (var i in special) {
    if (tecla == special[i]) {
      special_key = true;
      break;
    }
  }

  //condicional retorna falso si la tecla presionada no esta en la lista de letras permitidas
  if (letters.indexOf(keyboard) == -1 && !special_key) {
    return false;
  }
}

/* ****************************** */
/* FUNCIÓN PARA ENCRIPTAR TEXTO  */
/* ***************************** */
function encriptarTexto() {
  var textoAEncriptar = document
    .getElementById("ingresaTexto")
    .value.toLowerCase(); //obtenemos el texto ingresado
  textoAEncriptar = textoAEncriptar.split(""); //separamos la cadena y la ingresamos en un array

  //for para recorrer cada elemento del nuevo array y evaluamos cada letra
  for (var i = 0; i <= textoAEncriptar.length; i++) {
    switch (textoAEncriptar[i]) {
      case "a":
        textoAEncriptar[i] = "ai";
        break;
      case "e":
        textoAEncriptar[i] = "enter";
        break;
      case "i":
        textoAEncriptar[i] = "imes";
        break;
      case "o":
        textoAEncriptar[i] = "ober";
        break;
      case "u":
        textoAEncriptar[i] = "ufat";
        break;
    }
  }

  var textoEncriptado = textoAEncriptar.join(""); //pasamos el array a una cadena de texto

  document.getElementById("iconoBusqueda").style.display = "none"; //Ocultar el icono de busqueda
  document.getElementById("notFound").style.display = "none"; //Ocultar Ningún mensaje fue encontrado
  document.getElementById("msjIngresarTexto").style.display = "none"; //Ocultar Ingresa el texto
  document.getElementById("contieneTexto").style.display = "inline"; //Mostrar textarea con texto encriptado
  document.getElementById("contieneTexto").innerHTML = textoEncriptado; //Se pasa el texto cifrado al area de texto
  document.getElementById("copiar").style.display = "inline"; //Mostrar botón copiar
}

/* ****************************** */
/* FUNCIÓN PARA DESENCRIPTAR TEXTO  */
/* ***************************** */
function desencriptarTexto() {
  var textoEncriptado = document
    .getElementById("ingresaTexto")
    .value.toLowerCase(); //obtenemos el texto ingresado

  var textoDesencriptado = textoEncriptado.replace(/ai/gim, "a");
  var textoDesencriptado = textoDesencriptado.replace(/enter/gim, "e");
  var textoDesencriptado = textoDesencriptado.replace(/imes/gim, "i");
  var textoDesencriptado = textoDesencriptado.replace(/ober/gim, "o");
  var textoDesencriptado = textoDesencriptado.replace(/ufat/gim, "u");

  console.log(textoDesencriptado);

  document.getElementById("iconoBusqueda").style.display = "none"; //Ocultar el icono de busqueda
  document.getElementById("notFound").style.display = "none"; //Ocultar Ningún mensaje fue encontrado
  document.getElementById("msjIngresarTexto").style.display = "none"; //Ocultar Ingresa el texto
  document.getElementById("contieneTexto").style.display = "inline"; //Mostrar textarea con texto encriptado
  document.getElementById("contieneTexto").innerHTML = textoDesencriptado; //Se pasa el texto cifrado al area de texto
  document.getElementById("copiar").style.display = "inline"; //Mostrar botón copiar
}

/* ************************** */
/* FUNCIÓN PARA COPIAR TEXTO  */
/* ************************** */
function copiarTexto() {
  let texto = document.getElementById("contieneTexto"); //
  texto.select(); //seleccionamos todo el texto que este dentro del elemento
  texto.setSelectionRange(0, 99999); //seleccionar texto desde la posición incial hasta la final
  document.execCommand("copy"); //ejecutamos el comando copiar
  document.getElementById("ingresaTexto").value = "";
  document.getElementById("ingresaTexto").style.focus();
}
