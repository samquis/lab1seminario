  const obtenerFrecuenciLetras = (cadena) => {
    const resultado = {};
    // Recorremos la cadena de texto
    for (const letra of cadena) {
      if (resultado[letra]) {
        resultado[letra]++;
      }
      else {
        resultado[letra] = 1;
      }
    }
    const resultadoCadena = Object.entries(resultado).map(([letra, cantidad]) => `${letra}: ${cantidad}`).join("\n");
    return resultadoCadena;
  };
  
  // Ejemplo de uso de la función con entrada de datos
  const texto = 'Hola, mundo!';
  const result = obtenerFrecuenciLetras(texto);
  console.log(`El número de ocurrencias de cada letra en la cadena "${texto}" es:`);
  console.log(result);
  
  