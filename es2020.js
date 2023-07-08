const obtenerNumerosParesElevadosAlCuadradoMayoresQue10 = (numeros) => {
    // Filtramos los números pares
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    // Elevamos al cuadrado los números pares
    const numerosParesElevadosAlCuadrado = numerosPares.map(numero => numero ** 2);
    // Filtramos los números mayores que 10
    const numerosMayoresQue10 = numerosParesElevadosAlCuadrado.filter(numero => numero > 10);
    // retornamos el resultado
    return numerosMayoresQue10;
  };
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultado = obtenerNumerosParesElevadosAlCuadradoMayoresQue10(numeros);
  console.log(resultado); 